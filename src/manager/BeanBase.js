sap.ui.define([
    "sap/ui/base/ManagedObject"
], function (ManagedObject) {
    "use strict";

    var oManager = ManagedObject.extend("com.budgetBook.Manager.BeanBase", {
        metadata : {
            properties : {
                ownerComponent: { type: "object"}
            }
        }
    }),
        ManagerProto = oManager.prototype;

    return oManager;
});