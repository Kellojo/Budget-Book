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
        assert(!!oTransaction, "Transaction not defined");

        var oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData();
        if (!oData.transactions) {
            oData.transactions = [];
        }

        oTransaction.title = oTransaction.title.trim();
        oTransaction.category = oTransaction.category.trim();

        oData.transactions.push(oTransaction);
        oDatabase.refresh();
    };

    /**
     * Updates an existing transaction
     * @param {string} sPath
     * @param {object} oTransaction
     * @public
     */
    ManagerProto.updateTransaction = function(sPath, oTransaction) {
        assert(typeof sPath === "string", "Path for transaction not defined");
        assert(!!oTransaction, "Transaction not defined");

        var oDatabase = this.getOwnerComponent().getDatabase();
        oDatabase.setModelProperty(sPath, oTransaction);
    };

    /**
     * Get all distincs categories
     * @returns {string}
     * @public
     */
    ManagerProto.getAllCategories = function() {
        var oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aCategories = [];

        if (!oData.transactions) {
            return aCategories;
        }

        oData.transactions.forEach((oTransaction) => {
            var sCategory = oTransaction.category;

            if (!aCategories.includes(sCategory) &&
                sCategory != undefined &&
                sCategory != null)  {
                aCategories.push(sCategory);
            }
        });

        return aCategories;
    };

    return oManager;
});