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

    /**
     * Get's all transactions on a given day
     * @param {Date} oDate
     * @returns {array}
     * @public
     */
    ManagerProto.getAllTransactionsOnDate = function(oDate) {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            aResult = [];

        if (!oDate || !aTransactions) {
            return aResult;
        }


        aResult = aTransactions.filter((oTransaction) => {
            var oTransactionDate = new Date(oTransaction.occurredOn);
            return oTransactionDate.getFullYear() == oDate.getFullYear() &&
                   oTransactionDate.getMonth() == oDate.getMonth() &&
                   oTransactionDate.getDate() == oDate.getDate();
        });

        return jQuery.extend(true, [], aResult);
    }

    /**
     * Get's all transactions in the given month and or year
     * @param {string} sYear
     * @param {string} sMonth
     * @return {array}
     * @public
     */
    ManagerProto.getAllTransactionsIn = function(sYear, sMonth) {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            aResult = [];

        if (!aTransactions) {
            return aResult;
        }

        aTransactions = jQuery.extend(true, [], oData.transactions);
        aResult = aTransactions.filter(function(oTransaction) {
            var oTransactionDate = new Date(oTransaction.occurredOn);
            return oTransactionDate.getFullYear() == sYear && 
                ((!sMonth && sMonth != 0) || oTransactionDate.getMonth() == sMonth)
        }.bind(this));

        return aResult;
    }

    /**
     * Get's the transaction volume of a given month / year
     * @param {string} sYear
     * @param {string} sMonth
     * @returns {number}
     * @public
     */
    ManagerProto.getTransactionVolumeIn = function(sYear, sMonth) {
        var aTransactions = this.getAllTransactionsIn(sYear, sMonth),
            iVolume = 0;

        aTransactions.forEach((oTransaction) => {
            iVolume += oTransaction.amount;
        });

        return Math.floor(iVolume * 100) / 100;
    }

    return oManager;
});