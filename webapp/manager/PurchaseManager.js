sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "com/budgetBook/Config",
    "kellojo/m/thirdparty/MessageBox",
    "sap/ui/core/Core",
    "sap/m/MessageToast",
    "kellojo/m/library",
], function (ManagedObject, Config, MessageBox, Core, MessageToast, library) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.PurchaseManager", {
        metadata: {
            properties: {
                
            },

            events: {
                PurchaseChange: {
                    parameters: {
                        Purchases: {
                            type: "object"
                        }
                    }
                }
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {
        const oComponent = this.getOwnerComponent();
        const oFirebaseManager = oComponent.getFirebaseManager();
        this.m_oSubscriptionModel = oComponent.getModel("Subscription");
        
        oFirebaseManager.attachUserSignedIn(this.onUserSignedIn.bind(this));
    };

    SchemaProto.onUserSignedIn = async function() {

        if (this.m_fnUnsubscribeFromUpdates) {
            this.m_fnUnsubscribeFromUpdates();
            this.m_fnUnsubscribeFromUpdates = null;
        }

        const sUserId = firebase.auth().currentUser.uid;
        this.m_fnUnsubscribeFromUpdates = this.getOwnerComponent().getFirebaseManager().subscribeToChanges(
            firebase.firestore().doc(`subscriptions/${sUserId}`),
            this.onSubscriptionUpdate.bind(this),
        );
    }

    SchemaProto.onSubscriptionUpdate = function(querySnapshot) {
        let oSubscriptionData = querySnapshot.data();
        oSubscriptionData.purchasedAt = oSubscriptionData.purchasedAt.toDate();
        oSubscriptionData.expiresAt = oSubscriptionData.expiresAt.toDate();
        oSubscriptionData.isSubscribed = oSubscriptionData.currentPlan !== library.Plan.Free;
        Object.keys(oSubscriptionData).forEach(sKey => this.m_oSubscriptionModel.setProperty(`/${sKey}`, oSubscriptionData[sKey]));
        this.m_oSubscriptionModel.refresh(true);
    }


    SchemaProto.purchaseSubscription = function(oParam) {
        assert(!!oParam.subscription);

        window.api.purchaseSubscription({
            subscription: oParam.subscription,
            purchasing: () => { oParam.purchasing(); },
            purchased: (oEvent, oData) => { 
                this.onSubscriptionPurchased(oData);
                oParam.purchased(oData); 
            },
            failed: this.onPurchaseFailed.bind(this, oParam.failed),
            restored: () => { oParam.restored(); },
            deferred: () => { oParam.deferred(); },
        });
    }

    SchemaProto.onPurchaseFailed = function(fnInitialHandler, oResponse) {
        const oResourceBundle = Core.getLibraryResourceBundle("kellojo.m");
        MessageBox.error(oResourceBundle.getText("subscriptionPurchaseFailed"));

        if (typeof fnInitialHandler === "function") {
            fnInitialHandler();
        }
    }

    SchemaProto.onSubscriptionPurchased = async function(oData, iRetryCount = 0) {
        const oTransaction = oData.transaction;
        const oResourceBundle = Core.getLibraryResourceBundle("kellojo.m");

        if (iRetryCount >= 5) {
            return;
        }

        try {
            const oResponse = await fetch(Config.API.SUBSCRIPTIONS.PURCHASED, {
                method: "POST", 
                body: JSON.stringify({
                    originalTransactionId: oTransaction.originalTransactionIdentifier || oTransaction.transactionIdentifier,
                }),
                headers: {
                    authtoken: await firebase.auth().currentUser.getIdToken(),
                    'Content-Type': 'application/json',
                }
            });

            if (!oResponse.ok) {
                throw new Error(`Request to claim transaction ${oTransaction} failed`);
            }

        } catch (error) {
            setTimeout(() => {
                this.onSubscriptionPurchased(oData, ++iRetryCount);
            }, 10000);
        }

        MessageToast.show(oResourceBundle.getText("subscriptionClaimSuccess"));
    }

    SchemaProto.isSubscribed = function() {
        return this.m_oSubscriptionModel.getProperty("/isSubscribed");
    }

    SchemaProto.openSubscriptionDialog = function() {
        const oComponent = this.getOwnerComponent();
        const bCanMakePurchases = oComponent.getAppManager().getAppInfo().canMakePayments;

        if (bCanMakePurchases) {
            oComponent.openDialog("SubscriptionDialog", {
                title: "subscriptionDialogTitle",
                contentHeight: "550px",
                contentWidth: "432px",
                showHeader: false
            });
        } else {
            MessageToast.show(oComponent.getResourceBundle().getText("subscriptionsNotEnabled"));
        }

        
    }


    return oSchema;
});