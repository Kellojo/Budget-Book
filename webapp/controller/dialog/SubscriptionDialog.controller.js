sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
], function (ControllerBase) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.SubscriptionDialog", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.onInit = function() {
        this.m_oSubscriptionPurchase = this.byId("idSubscriptionPage");
    }

    ControllerProto.onOpenInDialog = async function(oSettings) {
        this.m_oDialog = oSettings.dialog;
        this.m_oSubscriptionPurchase.reset();
    };

    ControllerProto.onPurchaseSubscription = function(oEvent) {
        const oSource = oEvent.getSource();
        const oComponent = this.getOwnerComponent();
        const oSubscription = oEvent.getParameter("subscription");
        oComponent.getPurchaseManager().purchaseSubscription({
            subscription: oSubscription,
            failed: oSource.subscriptionFailed.bind(oSource),
            purchased: oSource.subscriptionPurchased.bind(oSource),
        });
    }

    ControllerProto.close = function() {
        this.m_oDialog.close();
    }



    return Controller;
});