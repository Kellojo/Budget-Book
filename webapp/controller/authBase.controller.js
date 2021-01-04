sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.authBase", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.m_oLogin = this.byId("idLogin");

        this.m_oAuthModel = new JSONModel({
            isLoginBusy: false,
            customErrorMessage: ""
        });
        this.getView().setModel(this.m_oAuthModel, "auth");
    };

    ControllerProto.onOpenInDialog = function(oSettings) {
        // reset view
        this.m_oLogin.reset();
        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            this.toSyncPage(true);
        } else {
            this.m_oNavContainer.to(this.m_oLogin, "show");
        }
        

        this.m_oSettings = oSettings;
    };

    // ------------------------
    // Events
    // ------------------------

    ControllerProto.onSignIn = function(oEvent) {
        this.m_oAuthModel.setProperty("/isLoginBusy", true);

        this.getOwnerComponent().getFirebaseManager().login({
            email: oEvent.getParameter("email"),
            password: oEvent.getParameter("password"),
            success: this.onSignInSuccess.bind(this),
            error: function(oEvent) {
                this.m_oAuthModel.setProperty("/customErrorMessage", oEvent.message);
                this.m_oLogin.shakeSignIn();
            }.bind(this),
            complete: function() {
                this.m_oAuthModel.setProperty("/isLoginBusy", false);
            }.bind(this),
        });        
    }

    ControllerProto.onSignUp = function(oEvent) {
        this.m_oAuthModel.setProperty("/isLoginBusy", true);

        this.getOwnerComponent().getFirebaseManager().signUp({
            email: oEvent.getParameter("email"),
            password: oEvent.getParameter("password"),
            success: this.onSignUpSuccess.bind(this),
            error: function(oEvent) {
                this.m_oAuthModel.setProperty("/customErrorMessage", oEvent.message);
                this.m_oLogin.shakeSignUp();
            }.bind(this),
            complete: function() {
                this.m_oAuthModel.setProperty("/isLoginBusy", false);
            }.bind(this),
        });   
    }

    ControllerProto.onPasswordForgotten = function(oEvent) {
        this.m_oAuthModel.setProperty("/isLoginBusy", true);

        this.getOwnerComponent().getFirebaseManager().sendPasswordForgottenEmail({
            email: oEvent.getParameter("email"),
            success: this.onPasswordForgottenSuccess.bind(this),
            error: function(oEvent) {
                this.m_oAuthModel.setProperty("/customErrorMessage", oEvent.message);
                this.m_oLogin.shakeForgottenPassword();
            }.bind(this),
            complete: function() {
                this.m_oAuthModel.setProperty("/isLoginBusy", false);
            }.bind(this),
        });   
    }

    ControllerProto.onSignOutPress = function() {
        this.getOwnerComponent().getFirebaseManager().signOut();
        this.onSignOutSuccess();
    }

    ControllerProto.onSignUpSuccess = function() {}
    ControllerProto.onSignInSuccess = function() {}
    ControllerProto.onSignOutSuccess = function() {}
    ControllerProto.onPasswordForgottenSuccess = function() {
        this.m_oLogin.toSignIn();
        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        MessageToast.show(oResourceBundle.getText("passwordForgottenEmailSent"));
    }


    return Controller;
});