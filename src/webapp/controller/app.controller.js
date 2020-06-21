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

    return Controller;
});