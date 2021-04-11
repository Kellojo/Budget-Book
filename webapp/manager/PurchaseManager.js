sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "kellojo/m/library",
    "sap/m/MessageBox",
    "sap/ui/core/Core",
], function (ManagedObject, JSONModel, Config, library, MessageBox, Core) {
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
        
        
    };

    SchemaProto.purchaseSubscription = function(oParam) {
        assert(!!oParam.subscription);

        window.api.purchaseSubscription({
            subscription: oParam.subscription,
            purchasing: () => { oParam.purchasing(); },
            purchased: () => { oParam.purchased(); },
            failed: this.onPurchaseFailed.bind(this, oParam.failed),
            restored: () => { oParam.restored(); },
            deferred: () => { oParam.deferred(); },
        });
    }

    SchemaProto.onPurchaseFailed = function(fnInitialHandler, oResponse) {
        const oComponent = this.getOwnerComponent();
        const oResourceBundle = Core.getLibraryResourceBundle("kellojo.m");
        MessageBox.error(oResourceBundle.getText("subscriptionPurchaseFailed"));

        if (typeof fnInitialHandler === "function") {
            fnInitialHandler();
        }
    }


    return oSchema;
});