sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/m/MessageToast",
], function (Controller, MessageToast) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.app", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.m_oErrorMessageContainer = this.getView().byId("idErrorMessageContainer");

        var oComponent = this.getOwnerComponent();
        oComponent.m_oErrorMessageContainer = this.m_oErrorMessageContainer;

        // set app icons
        this.byId("idApp").setHomeIcon({
            'phone': './img/appicon.png',
            'phone@2': './img/appicon.png',
            'tablet': './img/appicon.png',
            'tablet@2': './img/appicon.png',
            'icon': './img/favicon.png' 
        });

        // set apple status bar appearance
        jQuery("meta[name='apple-mobile-web-app-status-bar-style']").attr("content", "black-translucent");
    };


    ControllerProto.onExportPress = function() {
        this.getOwnerComponent().getDatabase().exportData({
            success: () => {MessageToast.show(
                this.getOwnerComponent().getResourceBundle().getText("exportDataSuccess")
            )}
        });
    }

    ControllerProto.onHelpPress = function() {
        this.getOwnerComponent().getAppManager().openHelpPage();
    }

    ControllerProto.onBackButtonPress = function() {
        this.getOwnerComponent().navBack();
    }

    ControllerProto.onAddTransactionPress = function() {
        this.getOwnerComponent().toTransaction(null);
    }

    ControllerProto.onSaveButtonPress = function() {
        this.getOwnerComponent().getAppManager().fireSaveButtonPress();
    }

    return Controller;
});