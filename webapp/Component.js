sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/UIComponent',

    "sap/m/MessageStrip",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/routing/History",

    "kellojo/m/UserHelpMenu",
    "sap/m/MessageToast",

    "com/budgetBook/Config",

    "com/budgetBook/manager/TransactionsManager",
    "com/budgetBook/manager/Database",
    "com/budgetBook/manager/Formatter",
    "com/budgetBook/manager/AppManager",
    "com/budgetBook/manager/FirebaseManager",

    "kellojo/m/library"
], function (jQuery, UIComponent, MessageStrip, Device, JSONModel, ResourceModel, History, UserHelpMenu, MessageToast, Config) {
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

        //init app header model
        this.setModel(new JSONModel({
            visible: true
        }), "appHeader");
        this.m_oAppHeaderModel = this.getModel("appHeader");

        // attach auth state change event
        this.getFirebaseManager().attachAuthStateChanged(this.onAuthStateChange.bind(this));
    };

    /**
     * Handles the auth state changes 
     */
    ComponentProto.onAuthStateChange = function() {
        // if on the web version, check if we should show the login or not :)
        if (this.getIsWebVersion()) {
            this.getRouter().initialize();

            if (this.getFirebaseManager().getIsLoggedIn()) {
                this.toOverview();
            } else {
                this.toAuth();
            }
        }
    }

    /**
     * Creates a bean
     * @param {string} sPrefix
     * @param {string} sBean
     */
    ComponentProto.createBean = function(sPrefix, sBean) {
        var oBean = com.budgetBook[sPrefix][sBean];
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
            var oResourceBundle = this.getResourceBundle();
            this.m_oUserHelpMenu = new UserHelpMenu({
                closeButtonVisible: Device.system.phone,
                close: function() {
                    this.m_oUserHelpMenu = null;
                }.bind(this),
                items: [
                    {
                        title: oResourceBundle.getText("UserHelpMenuExport"),
                        icon: "sap-icon://upload",
                        press: function() {
                            this.getDatabase().exportData({
                                success: () => {MessageToast.show(
                                    this.getResourceBundle().getText("exportDataSuccess")
                                )}
                            });
                        }.bind(this),
                        hasSpacer: true,
                        visible: !this.getIsWebVersion()
                    },
                    {
                        title: oResourceBundle.getText("UserHelpMenuGetMobileApp"),
                        icon: "sap-icon://iphone",
                        press: function() {
                            this.getAppManager().openHelpPage();
                        }.bind(this),
                        hasSpacer: false,
                        visible: !Device.system.phone
                    },
                    {
                        title: oResourceBundle.getText("UserHelpMenuGetDesktopApp"),
                        icon: "sap-icon://sys-monitor",
                        press: function() {
                            this.getAppManager().openHelpPage();
                        }.bind(this),
                        hasSpacer: false,
                        visible: Device.system.phone
                    },
                    {
                        title: oResourceBundle.getText("UserHelpMenuWebsite"),
                        icon: "sap-icon://internet-browser",
                        press: function() {
                            this.getAppManager().openHelpPage();
                        }.bind(this),
                        hasSpacer: true,
                        visible: true
                    },
                    {
                        title: oResourceBundle.getText("UserHelpMenuSignOut"),
                        icon: "sap-icon://log",
                        press: function(oEvent) {
                            this.getFirebaseManager().signOut();
                            this.m_oUserHelpMenu.close();
                        }.bind(this),
                        hasSpacer: false,
                        visible: this.getFirebaseManager().getIsLoggedIn()
                    }
                ]
            });
            //this.getUIArea().addDependent(this.m_oUserHelpMenu);
            this.m_oUserHelpMenu.openBy(oSource, "Bottom");
        }
    }


    /**
     * Navigates back, simple as that ;)
     */
    ComponentProto.navBack = function() {
        var oHistory = History.getInstance(),
            sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
            window.history.go(-1);
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

        var oDialog = new sap.m.Dialog({
            title: oResourceBundle.getText(oSettings.title),
            stretchOnPhone: true,
        }).addStyleClass("kellojoMDialog");
        oDialog.setModel(this.m_oResourceBundle, "i18n");
        oDialog.setModel(this.getModel("User"), "User");

        // Submit Button
        if (oSettings.submitButton) {
            var oSubmitButton = new sap.m.Button({
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
        var oCloseButton = new sap.m.Button({
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
            var oSubmitButton = new sap.m.Button({
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
        var oCloseButton = new sap.m.Button({
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
     * Registers an control to this component
     * @param {sap.ui.core.control} oControl - the control to register
     * @parag {string} sName - the name of the control
     */
    ComponentProto.registerControl = function (oControl, sName) {
        if (oControl && sName) {
            this["m_c" + sName] = oControl;

            if (sName === "BackButton") {
                oControl.attachPress(this.onBackButtonPressed.bind(this));
            }
        }
    };
    /**
     * Registeres an app header control
     */
    ComponentProto.registerAppHeaderControl = function(oControl, sName) {
        this.registerControl(oControl, sName);
        var oVisibilityData = this.m_oAppHeaderModel.getData(),
            sName = sName + "Visibility";
        oVisibilityData[sName] = false;
        this.m_oAppHeaderModel.setData(oVisibilityData);
        this.m_oAppHeaderModel.refresh(true);
        this["set" + sName] = function(sName, bVisible, fnPressHandler) {
            if (bVisible) {
                this.m_oAppHeaderModel.setProperty("/visible", true); //show app header, if value is true

                //attach/detach press handler if present
                if (typeof oControl.data("pressHandler") === "function") {
                    oControl.detachPress(oControl.data("pressHandler"));
                }
                if (
                    typeof oControl.attachPress === "function" &&
                    typeof fnPressHandler === "function"
                ) {
                    oControl.attachPress(fnPressHandler);
                    oControl.data("pressHandler", fnPressHandler);
                }
            }
            this.m_oAppHeaderModel.setProperty("/" + sName, bVisible);
        }.bind(this, sName);
    };
    /**
     * Gets a control by it's name
     * @param {string} sName - the name of the control. Has to be registered beforehand!
     */
    ComponentProto.getControl = function (sName) {
        return this["m_c" + sName];
    };

    /**
     * Get's the resource model
     * @returns {sap.ui.model.resource.ResourceBundle}
     * @public
     */
    ComponentProto.getResourceBundle = function() {
        return this.m_oResourceBundle.getResourceBundle();
    };

    //
    // App Header
    //

    ComponentProto.onBackButtonPressed = function () {
        this.navBack();
    };

    /**
     * Sets the button visibility of any registered button, and the press handler
     */
    ComponentProto.setButtonVisible = function (sName, bVisible, fnOnPress) {
        this.m_oAppHeaderModel.setProperty("/" + sName + "Visible", bVisible);

        var oButton = this.getControl(sName),
            sHandlerVarName = "m_fnOn" + sName + "Press";
        if (this[sHandlerVarName]) {
            oButton.detachPress(this[sHandlerVarName]);
            this[sHandlerVarName] = null;
        }
        if (fnOnPress) {
            oButton.attachPress(fnOnPress);
            this[sHandlerVarName] = fnOnPress;
        }
    };

    /**
     * Hides all app hesder buttons
     * @public
     */
    ComponentProto.hideAllAppHeaderButtons = function() {
        var aKeys = Object.keys(this.m_oAppHeaderModel.getData());
        aKeys.forEach(function(sKey) {
            this.m_oAppHeaderModel.setProperty("/" + sKey, false);
        }.bind(this));
    };

    return Component;
})