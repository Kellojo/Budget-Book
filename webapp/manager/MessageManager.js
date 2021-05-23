







sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "kellojo/m/thirdparty/MessageBox"
], function (ManagedObject, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.MessageManager", {
        metadata: {
            properties: {

            },

            events: {

            }
        }
    }),
        SchemaProto = oSchema.prototype;


    SchemaProto.onInit = function () {
        
    };


    /**
     * Shows the delete transaction warning
     * @returns {Promise}
     * @private
     */
    SchemaProto.showDeleteTransactionWarning = async function () {

        return new Promise((resolve, reject) => {
            var oComponent = this.getOwnerComponent(),
                oResourceBundle = oComponent.getResourceBundle(),
                sDeleteAction = oResourceBundle.getText("dialogDelete");

            MessageBox.warning(oResourceBundle.getText("deleteTransactionWarning"), {
                emphasizedAction: sDeleteAction,
                contentWidth: "350px",
                actions: [
                    oResourceBundle.getText("dialogCancel"),
                    sDeleteAction
                ],
                onClose: function (sAction) {
                    if (sAction === sDeleteAction) {
                        resolve();
                        return;
                    }
                    reject();
                }.bind(this)
            });
        });
    }

    return oSchema;
});
