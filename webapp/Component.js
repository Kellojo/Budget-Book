sap.ui.define([
    'jquery.sap.global',
    'kellojo/m/ComponentBase',

    "sap/m/MessageStrip",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/routing/History",

    "kellojo/m/UserHelpMenu",
    "kellojo/m/library",
    "sap/m/MessageToast",

    "com/budgetBook/Config",
    "kellojo/m/WhatsNewDialog",
    "kellojo/m/Dialog",
    "sap/m/Button",

    "com/budgetBook/manager/TransactionsManager",
    "com/budgetBook/manager/Database",
    "com/budgetBook/manager/Formatter",
    "com/budgetBook/manager/AppManager",
    "com/budgetBook/manager/FirebaseManager",
    "com/budgetBook/manager/PreferenceManager",
    "com/budgetBook/manager/MessageManager",
    "com/budgetBook/manager/PlannedTransactionsManager",
    "com/budgetBook/manager/PurchaseManager",

    "kellojo/m/library"
], function (jQuery, UIComponent, MessageStrip, Device, JSONModel, ResourceModel, History, UserHelpMenu, library, MessageToast, Config, WhatsNewDialog, Dialog, Button, Licences) {
    "use strict";

    var Component = UIComponent.extend("com.budgetBook.Component", {
        metadata: {
            manifest: "json",

            properties: {
                isWebVersion: {
                    type: "boolean",
                    defaultValue: true
                },
                isTrayVersion: {
                    type: "boolean",
                    defaultValue: false
                }
            }
        }
    });
    var ComponentProto = Component.prototype;

    ComponentProto.ID_ERROR_MESSAGE_CONTAINER = "idErrorMessageContainer";

    ComponentProto.init = function () {
        UIComponent.prototype.init.apply(this, arguments);

        const oUrlParams = new URLSearchParams(window.location.search),
            sEnvironment = oUrlParams.get("env");
        this.setIsTrayVersion(sEnvironment === "tray");
        this.setIsWebVersion(!window.api || (!!window.api && !window.api.isElectron));
        if (!this.getIsWebVersion()) {
            document.getElementsByTagName('html')[0].classList.add('sap-electron');
        }

        if (!this.getIsWebVersion()) {
            document.documentElement.classList.add("sap-electron");
        }

        //set device & i18n model
        var oDevice = Device;
        oDevice.isWebVersion = this.getIsWebVersion();
        oDevice.isTrayVersion = this.getIsTrayVersion();
        this.setModel(new JSONModel(oDevice), "device");
        this.m_oResourceBundle = new ResourceModel({
            bundleName: "com.budgetBook.i18n.i18n"
        });
        this.setModel(this.m_oResourceBundle, "i18n");

        // open source licenses model
        this.setModel(new JSONModel("./config/package-licenses.json"), "OpenSourceLicenses");

        // init routing, for non web version
        if (!this.getIsWebVersion()) {
            this.getRouter().initialize();
        }

        //init beans
        this.m_aInstantiatedBeans = [];
        for (var sType in Config.Beans) {
            Config.Beans[sType].forEach((sBean) => {
                this.createBean(sType, sBean);
            });
        }
        this.m_aInstantiatedBeans.forEach((oBean) => {
            if (typeof oBean.onInit === "function") {
                oBean.onInit();
            }
        });

        // attach to logged in
        this.getFirebaseManager().attachUserSignedIn(
            this.getTransactionsManager().uploadCategories.bind(this.getTransactionsManager())
        );
        
        // create shared dialogs
        this.m_oDialogs = {};
        for (var key in Config.SHARED_DIALOGS) {
            jQuery.sap.log.info("Creating Dialog '" + key + "'");
            this.m_oDialogs[key] = {
                view: this.runAsOwner(function (sView) {
                    return sap.ui.xmlview(sView);
                }.bind(this, Config.SHARED_DIALOGS[key].view))
            };
        }

        // attach auth state change event
        this.getFirebaseManager().attachAuthStateChanged(this.onAuthStateChange.bind(this));
        this.getPreferenceManager().attachPreferenceChange(this.onPreferenceChange.bind(this));
    };

    /**
     * Handles the auth state changes 
     */
    ComponentProto.onAuthStateChange = async function() {
        // if on the web version, check if we should show the login or not :)
        if (this.getIsWebVersion()) {
            this.getRouter().initialize();

            if (this.getFirebaseManager().getIsLoggedIn()) {
                this.toOverview();
            } else {
                this.toAuth();
            }
        }
        
        await this.getPreferenceManager().fetchPreferences();
        this.openWhatsNewDialog();
    }

    /**
     * Called, when the preferences change
     * @param {sap.ui.base.Event} oEvent 
     * @protected
     */
    ComponentProto.onPreferenceChange = function(oEvent) {
        const oPreferences = oEvent.getParameter("preferences");
        this.getThemeManager().setTheme(library.mapStringToTheme(oPreferences.theme));
    }

    /**
     * Creates a bean
     * @param {string} sPrefix
     * @param {string} sBean
     */
    ComponentProto.createBean = function(sPrefix, sBean) {
        if (sPrefix != "directReferences") {
            var oBean = com.budgetBook[sPrefix][sBean];
        } else {
            var oBean = sBean;
            let aParts = oBean.getMetadata().getName().split(".");
            sBean = aParts[aParts.length - 1];
        }


        if (!oBean) {
            jQuery.sap.log.error("Could not initialize missing bean '" + sPrefix + "." + sBean + "'");
        } else {
            jQuery.sap.log.info("Creating Bean '" + sPrefix + "." + sBean + "'");

            oBean = new oBean({
                ownerComponent: this
            });
            this.m_aInstantiatedBeans.push(oBean);
            this["get" + sBean] = function() {
                return this;
            }.bind(oBean);
        }
    };



    // -------------------------------------
    // Navigation
    // -------------------------------------

    ComponentProto.toOverview = function () {
        this.getRouter().navTo("overview", {});
    };
    ComponentProto.toPlannedTransactionsView  = function() {
        this.getRouter().navTo("plannedTransactions", {});
    };
    ComponentProto.toWelcomeScreen = function () {
        this.getRouter().navTo("welcome", {});
    };
    ComponentProto.toAuth = function() {
        this.getRouter().navTo("auth");
    }
    ComponentProto.toTransaction = function (oTransaction) {
        this.getRouter().navTo("transaction", {
            transactionId: !!oTransaction ? oTransaction.id : "new"
        });
    };

    ComponentProto.openUserHelpMenu = function(oSource) {
        if (!!this.m_oUserHelpMenu) {
            this.m_oUserHelpMenu.close();
        } else {
            this.m_oUserHelpMenu = new UserHelpMenu({
                email: this.getFirebaseManager().getEmail(),
                signOutVisible: this.getFirebaseManager().getIsLoggedIn(),
                openSourceLicenses: this.getModel("OpenSourceLicenses").getData(),
                installationHintVisible: Device.os.ios,
                closeButtonVisible: Device.system.phone,
                close: function() {
                    this.m_oUserHelpMenu = null;
                }.bind(this),
                

                exportPress: function() {
                    this.getDatabase().exportData();
                }.bind(this),
                exportVisible: !this.getIsWebVersion(),

                getMobileAppPress: function() {
                    this.getAppManager().openHelpPage();
                }.bind(this),
                getDesktopAppPress: function() {
                    this.getAppManager().openHelpPage();
                }.bind(this),

                websitePress: function() {
                    this.getAppManager().openHelpPage();
                }.bind(this),
                changelogPress: function () {
                    this.getAppManager().openChangeLogPage();
                }.bind(this),

                signOutPress: function(oEvent) {
                    this.getFirebaseManager().signOut();
                    this.m_oUserHelpMenu.close();
                }.bind(this),
                signOutVisible: this.getFirebaseManager().getIsLoggedIn(),

                selectedTheme: this.getThemeManager().getTheme(),
                themeChange: (oEvent) => {
                    this.getThemeManager().setTheme(oEvent.getParameter("theme"));
                },

                availableCurrencies: Config.AVAILABLE_CURRENCIES,
                selectedCurrency: this.getPreferenceManager().getPreference("/currency"),
                currencyChange: (oEvent) => {
                    this.getPreferenceManager().setPreference("/currency", oEvent.getParameter("currency"));
                }
            });
            //this.getUIArea().addDependent(this.m_oUserHelpMenu);
            this.m_oUserHelpMenu.openBy(oSource, "Bottom");
        }
    }

    ComponentProto.openWhatsNewDialog = async function() {
        const oReleaseNote = await (await fetch("./config/release-notes.json")).json();
        const oPreferenceManager = this.getPreferenceManager();
        const sLastViewedReleaseNotes = oPreferenceManager.getPreference("/lastViewedReleaseNotes");
        if (sLastViewedReleaseNotes !== oReleaseNote.version) {
            oReleaseNote.dismiss = oPreferenceManager.setPreference.bind(oPreferenceManager, "/lastViewedReleaseNotes", oReleaseNote.version),
            new WhatsNewDialog(oReleaseNote).open();
        }
    }


    /**
     * Navigates back, simple as that ;)
     */
    ComponentProto.navBack = function() {
        var oHistory = History.getInstance(),
            sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
            const sOldHash = window.location.hash;
            window.history.go(-1);

            // Failover, since safari sometimes doesn't perform the navigation when app is added to home screen
            setTimeout(() => {
                if (sOldHash === window.location.hash) {
                    this.toOverview();
                }
            }, 1);
        } else {
            this.toOverview();
        }
    };


    // -------------------------------------
    // Utility
    // -------------------------------------

    ComponentProto.notifyDatabaseReady = function() {
        this.m_bDatabaseLoaded = true;
        this._checkAppReady();
    }

    ComponentProto.notifyAppInfoReady = function() {
        this.m_bAppInfoLoaded = true;
        Config.applyTranslatedConfigProperties(this.getResourceBundle(), Config, this.getAppManager().getAppInfo());
        this.setModel(new JSONModel(Config), "Config");
        this._checkAppReady();
    }

    ComponentProto._checkAppReady = function() {
        if (this.m_bAppInfoLoaded && this.m_bDatabaseLoaded) {

            // navigate to correct view
            if (this.getIsTrayVersion()) {
                this.toOverview();
            } if (this.getAppManager().getAppInfo().isFirstStartUp) {
                this.toWelcomeScreen();
            } else if (this.getIsTrayVersion()) {
                this.toOverview();
            }

            // Remove the loading screen
            var oLoadingScreenElement = jQuery("#idLoadingScreen");
            setTimeout(() => {
                oLoadingScreenElement.fadeOut(300, () => {
                    oLoadingScreenElement.remove();
                });
            }, 1000);
        }
    }

    ComponentProto.showErrorMessage = function (sErrorMessage) {
        var oMessageStrip = new MessageStrip({
            text: sErrorMessage,
            type: "Error",
            showCloseButton: true
        });
        this.m_oErrorMessageContainer.addItem(oMessageStrip);
        setTimeout(function (oMessageStrip) { oMessageStrip.destroy() }.bind(this, oMessageStrip), 5000);
    };

    ComponentProto.openDialog = function (sDialog, oSettings) {
        var oView = this.m_oDialogs[sDialog].view,
            oController = oView.getController(),
            oResourceBundle = this.getResourceBundle();
        oController

        var oDialog = new Dialog({
            title: oResourceBundle.getText(oSettings.title),
            stretchOnPhone: true,
        }).addStyleClass("kellojoMDialog");
        oDialog.setModel(this.m_oResourceBundle, "i18n");
        oDialog.setModel(this.getModel("User"), "User");
        oDialog.setModel(this.getModel("AppInfo"), "AppInfo");
        oDialog.setModel(this.getModel("Preferences"), "Preferences");
        oDialog.setModel(this.getModel("Config"), "Config");
        oDialog.setContentHeight(oSettings.contentHeight);
        oDialog.setContentWidth(oSettings.contentWidth);
        oSettings.dialog = oDialog;

        // Submit Button
        if (oSettings.submitButton) {
            var oSubmitButton = new Button({
                text: oSettings.submitText || oResourceBundle.getText("dialogSubmit"),
                type: "Emphasized",
                press: function () {
                    var bSubmitValid = true;

                    if (oController.onSubmitButtonPress) {
                        bSubmitValid = oController.onSubmitButtonPress();
                    }

                    if (bSubmitValid) {
                        if (oController.onCloseInDialog) {
                            oController.onCloseInDialog();
                        }
                        oDialog.close();
                    }
                }
            });
            oDialog.setEndButton(oSubmitButton);
        }

        // Close Button
        var oCloseButton = new Button({
            text: oResourceBundle.getText("dialogClose"),
            type: "Transparent",
            press: function () {
                if (oController.onCloseInDialog) {
                    oController.onCloseInDialog();
                }
                oDialog.close();
            }
        });
        oDialog.setBeginButton(oCloseButton);

        oDialog.addContent(this.m_oDialogs[sDialog].view);
        oDialog.setShowHeader(oSettings.showHeader);
        oDialog.open();

        if (oController.onOpenInDialog) {
            oController.onOpenInDialog(oSettings);
        }
    };

    ComponentProto.openPopover = function (sDialog, oSettings, oControl) {
        var oView = this.m_oDialogs[sDialog].view,
            oController = oView.getController(),
            oResourceBundle = this.getResourceBundle();
        oController

        var oDialog = new sap.m.ResponsivePopover({
            title: oResourceBundle.getText(oSettings.title)
        }).addStyleClass("kellojoMDialog");
        oDialog.setModel(this.m_oResourceBundle, "i18n");

        // Submit Button
        if (oSettings.submitButton) {
            var oSubmitButton = new Button({
                text: oSettings.submitText || oResourceBundle.getText("dialogSubmit"),
                type: "Emphasized",
                press: function () {
                    var bSubmitValid = true;

                    if (oController.onSubmitButtonPress) {
                        bSubmitValid = oController.onSubmitButtonPress();
                    }

                    if (bSubmitValid) {
                        if (oController.onCloseInDialog) {
                            oController.onCloseInDialog();
                        }
                        oDialog.close();
                    }
                }
            });
            oDialog.setEndButton(oSubmitButton);
        }

        // Close Button
        var oCloseButton = new Button({
            text: oResourceBundle.getText("dialogClose"),
            type: "Transparent",
            press: function () {
                if (oController.onCloseInDialog) {
                    oController.onCloseInDialog();
                }
                oDialog.close();
            }
        });
        oDialog.setBeginButton(oCloseButton);

        oDialog.addContent(this.m_oDialogs[sDialog].view);
        oDialog.setPlacement(oSettings.placement);
        oDialog.setContentHeight(oSettings.contentHeight);
        oDialog.setShowHeader(!!oSettings.showHeader);
        oDialog.openBy(oControl);

        if (oController.onOpenInDialog) {
            oController.onOpenInDialog(oSettings);
        }
    };

    /**
     * Get's the resource model
     * @returns {sap.ui.model.resource.ResourceBundle}
     * @public
     */
    ComponentProto.getResourceBundle = function() {
        return this.m_oResourceBundle.getResourceBundle();
    };
    
    return Component;
})