sap.ui.define([
    "com/budgetBook/controller/authBase.controller"
], function (AuthBaseController) {
    "use strict";

    var Controller = AuthBaseController.extend("com.budgetBook.controller.auth", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.onInit = function() {
        AuthBaseController.prototype.onInit.apply(this, arguments);
    };

    ControllerProto.onSignUpSuccess = function() {
        this.getOwnerComponent().toOverview();
    }
    ControllerProto.onSignInSuccess = function() {
        this.getOwnerComponent().toOverview();
    }

    

    return Controller;
});