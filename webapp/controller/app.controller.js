sap.ui.define([
    "com/budgetBook/controller/ControllerBase"
], function (Controller) {
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

    ControllerProto.onBackButtonPress = function() {
        this.getOwnerComponent().navBack();
    }

    ControllerProto.onAddTransactionPress = function() {
        this.getOwnerComponent().toTransaction(null);
    }

    ControllerProto.onSaveButtonPress = function() {
        this.getOwnerComponent().getAppManager().fireSaveButtonPress();
    }

    ControllerProto.onUserHelpMenuPress = function(oEvent) {
        this.getOwnerComponent().openUserHelpMenu(oEvent.getSource());
    }

    return Controller;
});