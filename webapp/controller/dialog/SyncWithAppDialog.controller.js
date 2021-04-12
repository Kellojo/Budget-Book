sap.ui.define([
    "com/budgetBook/controller/authBase.controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast"
], function (AuthBaseController, JSONModel, MessageToast) {
    "use strict";

    var Controller = AuthBaseController.extend("com.budgetBook.controller.dialog.SyncWithAppDialog", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        AuthBaseController.prototype.onInit.apply(this, arguments);
        this.m_oSyncPage = this.byId("idSyncPage");
        this.m_oNavContainer = this.byId("idNavContainer");
        this.m_oSubscriptionPurchase = this.byId("idSubscriptionPage");
        this.m_oViewModel = new JSONModel({
            transactions: [],
            transactionsCount: 0,
        });
        this.getView().setModel(this.m_oViewModel);
    };

    ControllerProto.onOpenInDialog = function(oSettings) {
        // reset view
        this.m_oLogin.reset();
        if (this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            this.toSubscriptionPage(true);
        } else {
            this.m_oNavContainer.to(this.m_oLogin, "show");
        }
        
        this.m_oSettings = oSettings;
    };

    // ------------------------
    // Events
    // ------------------------

    ControllerProto.onSignUpSuccess = function() {
        this.toSubscriptionPage();
    }

    ControllerProto.onSignInSuccess = function() {
        this.toSubscriptionPage();
    }

    ControllerProto.onSignOutSuccess = function() {
        this.m_oNavContainer.to(this.m_oLogin, "slide");
    }

    ControllerProto.toSyncPage = function(oEvent, bInstant) {
        this.m_oLogin.reset();
        this.m_oNavContainer.to(this.m_oSyncPage, !!bInstant ? "show" : "slide");
        this.getOwnerComponent().getTransactionsManager().listenForSynchronizeableTransactions(
            this.onSynchronizeableTransactionsChange.bind(this)
        );
    }

    ControllerProto.toSubscriptionPage = function(bInstant) {
        this.m_oSubscriptionPurchase.reset();
        this.m_oNavContainer.to(this.byId("idSubscriptionPage"), !!bInstant ? "show" : "slide");
    }

    ControllerProto.onPurchaseSubscription = function(oEvent) {
        const oSource = oEvent.getSource();
        const oComponent = this.getOwnerComponent();
        const oSubscription = oComponent.getModel("AppInfo").getProperty("/subscriptions/monthly/");
        oComponent.getPurchaseManager().purchaseSubscription({
            subscription: oSubscription,
            failed: oSource.subscriptionFailed.bind(oSource),
            purchased: oSource.subscriptionPurchased.bind(oSource),
        });
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