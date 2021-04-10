sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "kellojo/m/library",
    "sap/m/MessageBox",
], function (ManagedObject, JSONModel, Config, library, MessageBox) {
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
        oParam.purchasing = alert;
        oParam.purchased = alert;
        oParam.failed = this.onPurchaseFailed.bind(this);
        oParam.restored = alert;
        oParam.deferred = alert;
        window.api.purchaseSubscription(oParam);
    }

    SchemaProto.onPurchaseFailed = function(oResponse) {
        const oComponent = this.getOwnerComponent();
        const oResourceBundle = oComponent.getResourceBundle();
        MessageBox.error(oResourceBundle.getText("subscriptionPurchaseFailed"));
    }


    return oSchema;
});