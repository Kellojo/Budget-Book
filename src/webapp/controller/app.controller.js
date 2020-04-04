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
    };

    return Controller;
});