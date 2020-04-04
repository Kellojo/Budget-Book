sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log"
], function (ManagedObject, Log) {
    "use strict";

    var oManager = ManagedObject.extend("com.budgetBook.manager.TransactionsManager", {}),
        ManagerProto = oManager.prototype;
    
    ManagerProto.onInit = function() {

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
     * Deletes the transaction at the given path
     * @param {object} oTransaction - the tansaction to delete
     */
    ManagerProto.deleteTransaction = function(oTransaction) {
        assert(!!oTransaction, "Transaction not defined");

        var oDatabase = this.getOwnerComponent().getDatabase(),
            aTransactions = oDatabase.getData().transactions,
            iIndex = aTransactions.indexOf(oTransaction);

        assert(iIndex >= 0, "The transaction to delete could not be found in the database");    
        aTransactions.splice(iIndex, 1);

        oDatabase.refresh();
    }

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

    /**
     * Get's all distinct years and the correpsonding months from a set of transactions
     * @param {array} aTransactions
     * @returns {object} 
     * @public
     */
    ManagerProto.getAllMonths = function() {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            oResourceBundle = this.getOwnerComponent().getResourceBundle();

        if (!aTransactions) {
            return [];
        }

        var oTime = {};

        // create our distinct time object
        aTransactions.forEach((oTransaction) => {
            var oDate = oTransaction.occurredOn;
            if (typeof oTransaction.occurredOn === "number" || typeof oTransaction.occurredOn === "string") {
                oDate = new Date(oTransaction.occurredOn);
            }
            var iYear = oDate.getFullYear(),
                iMonth = oDate.getMonth(),
                sUniqueKey = iMonth + "_" + iYear;

            if (!oTime.hasOwnProperty(iYear.toString()) || !oTime[iYear].hasOwnProperty(iMonth.toString())) {
                if (!oTime.hasOwnProperty(iYear.toString())) {
                    oTime[iYear] = {};
                }

                oTime[iYear][iMonth] = {
                    year: iYear,
                    monthIndex: iMonth,
                    text: oResourceBundle.getText("monthWithIndex_" + iMonth),
                    transactionCount: 1
                };
            } else {
                oTime[iYear][iMonth].transactionCount++;
            }
        });

        return oTime;
    }

    return oManager;
});