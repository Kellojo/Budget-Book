sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "sap/m/Button"
], function (Controller, JSONModel, Config, MessageToast, Button) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.dialog.SyncWithAppDialog", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.m_oLogin = this.byId("idLogin");
        this.m_oSyncPage = this.byId("idSyncPage");
        this.m_oNavContainer = this.byId("idNavContainer");

        this.m_oViewModel = new JSONModel({
            isLoginBusy: false,
            transactions: [],
            transactionsCount: 0,
            customErrorMessage: ""
        });
        this.getView().setModel(this.m_oViewModel);
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
        this.m_oViewModel.setProperty("/isLoginBusy", true);

        this.getOwnerComponent().getFirebaseManager().login({
            email: oEvent.getParameter("email"),
            password: oEvent.getParameter("password"),
            success: function() {
                this.toSyncPage();
            }.bind(this),
            error: function(oEvent) {
                this.m_oViewModel.setProperty("/customErrorMessage", oEvent.message);
            }.bind(this),
            complete: function() {
                this.m_oViewModel.setProperty("/isLoginBusy", false);
            }.bind(this),
        });        
    }

    ControllerProto.onSignUp = function(oEvent) {
        this.m_oViewModel.setProperty("/isLoginBusy", true);

        this.getOwnerComponent().getFirebaseManager().signUp({
            email: oEvent.getParameter("email"),
            password: oEvent.getParameter("password"),
            success: function() {
                this.toSyncPage();
            }.bind(this),
            error: function(oEvent) {
                this.m_oViewModel.setProperty("/customErrorMessage", oEvent.message);
            }.bind(this),
            complete: function() {
                this.m_oViewModel.setProperty("/isLoginBusy", false);
            }.bind(this),
        });   
    }

    ControllerProto.onSignOutPress = function() {
        this.m_oNavContainer.to(this.m_oLogin, "slide");
        this.getOwnerComponent().getFirebaseManager().signOut();
    }

    ControllerProto.toSyncPage = function(bInstant) {
        this.m_oLogin.reset();
        this.m_oNavContainer.to(this.m_oSyncPage, bInstant ? "show" : undefined);
        this.getOwnerComponent().getTransactionsManager().listenForSynchronizeableTransactions(
            this.onSynchronizeableTransactionsChange.bind(this)
        );
    }

    ControllerProto.onSynchronizeableTransactionsChange = function(aTransactions) {
        this.m_oViewModel.setProperty("/transactions", aTransactions);
        this.m_oViewModel.setProperty("/transactionsCount", aTransactions.length);
    }

    ControllerProto.onSynchronizeButtonPress = function() {
        this.getOwnerComponent().getTransactionsManager().synchronizeTransactions({
            complete: function(oResult) {
                MessageToast.show(this.getOwnerComponent().getResourceBundle().getText("SyncWithAppDialogSyncComplete", [oResult.successfullSyncs]));
            }.bind(this)
        });
    }


    return Controller;
});