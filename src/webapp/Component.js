sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/UIComponent',

    "sap/m/MessageStrip",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",

    "com/budgetBook/Config",

    "com/budgetBook/manager/TransactionsManager",
    "com/budgetBook/manager/Database",
    "com/budgetBook/manager/Formatter",
    "com/budgetBook/manager/AppManager",
    "com/budgetBook/manager/FirebaseManager"
], function (jQuery, UIComponent, MessageStrip, Device, JSONModel, ResourceModel, Config) {
    "use strict";

    var Component = UIComponent.extend("com.budgetBook.Component", {
        metadata: {
            manifest: "json"
        }
    });
    var ComponentProto = Component.prototype;

    ComponentProto.ID_ERROR_MESSAGE_CONTAINER = "idErrorMessageContainer";

    ComponentProto.init = function () {
        UIComponent.prototype.init.apply(this, arguments);
        var oRouter = this.getRouter();
        oRouter.initialize();

        //init beans
        for (var sType in Config.Beans) {
            Config.Beans[sType].forEach((sBean) => {
                this.createBean(sType, sBean);
            });
        }

        // attach to logged in
        this.getFirebaseManager().attachUserSignedIn(
            this.getTransactionsManager().uploadCategories.bind( this.getTransactionsManager())
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

        //set device & i18n model
        this.setModel(new JSONModel(Device), "device");
        this.m_oResourceBundle = new ResourceModel({
            bundleName: "com.budgetBook.i18n.i18n"
         })
        this.setModel(this.m_oResourceBundle, "i18n");

        //init app header model
        this.setModel(new JSONModel({
            visible: true
        }), "appHeader");
        this.m_oAppHeaderModel = this.getModel("appHeader");
    };

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

            if (typeof oBean.onInit === "function") {
                oBean.onInit();
            }
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

    ComponentProto.openUserManagementDialog = function (oSettings) {
        oSettings = jQuery.extend(oSettings, {
            title: "userManagementDialog-title"
        });
        this.openDialog("userManagementDialog", oSettings);
    };

    /**
     * Navigates back, simple as that ;)
     */
    ComponentProto.navBack = function() {
            var oHistory = History.getInstance();
			    sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				console.error("Could not navigate back and not default fallback has been configured...");
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
            if (this.getAppManager().getAppInfo().isFirstStartUp) {
                this.toWelcomeScreen();
            } else {
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
            title: oResourceBundle.getText(oSettings.title)
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