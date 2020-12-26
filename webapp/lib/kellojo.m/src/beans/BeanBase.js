sap.ui.define([
    "sap/ui/base/ManagedObject"
], function (ManagedObject) {
    "use strict";

    var oManager = ManagedObject.extend("kellojo.m.beans.BeanBase", {
        metadata : {
            properties : {
                ownerComponent: { type: "object"}
            }
        }
    }),
        ManagerProto = oManager.prototype;

    return oManager;
});