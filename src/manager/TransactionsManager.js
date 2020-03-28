sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log"
], function (ManagedObject, Log) {
    "use strict";

    var oManager = ManagedObject.extend("com.budgetBook.manager.TransactionsManager", {}),
        ManagerProto = oManager.prototype;
    
    ManagerProto.init = function() {

    };

    ManagerProto.insertTransaction = function(oTransaction) {
        var oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData();
        if (!oData.transactions) {
            oData.transactions = [];
        }

        oData.transactions.push(oTransaction);
        oDatabase.refresh();
    };

    return oManager;
});