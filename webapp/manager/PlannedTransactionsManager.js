sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/base/Log",
    "com/budgetBook/Config",
    "kellojo/m/library",
    "com/budgetBook/thirdparty/rrule.min",
], function (ManagedObject, Log, Config, library) {
    "use strict";

    var oManager = ManagedObject.extend("com.budgetBook.manager.PlannedTransactionsManager", {
        metadata: {
            
        }
    }),
        ManagerProto = oManager.prototype;

    ManagerProto.onInit = function () {
        const oDatabase = this.getOwnerComponent().getDatabase();
        oDatabase.attachDataLoaded(this.updatePlannedTransactions.bind(this));
    };

    ManagerProto.updatePlannedTransactions = function() {
        const oDatabase = this.getOwnerComponent().getDatabase();
        const oTransactionManager = this.getOwnerComponent().getTransactionsManager();
        const sLastChecked = oDatabase.getData().lastPlannedTransactionsCheck;
        const aPlannedTransactions = oDatabase.getData().plannedTransactions;
        const oLastChecked = !!sLastChecked ? new Date(sLastChecked) : null;
        const oNewLastChecked = new Date();

        // check for planned transactions

            aPlannedTransactions.forEach(oPlannedTransaction => {
                if (!oPlannedTransaction) {
                    return;
                }

                // grab transaction data
                const sRecurrence = oPlannedTransaction.reccurrence;
                const oStartDate = new Date(oPlannedTransaction.startingFrom);
                const oRule = this.constructRRule(oStartDate, sRecurrence);

                // get occurrences
                const aOccurrences = oRule.between(oLastChecked || oStartDate, oNewLastChecked, true);

                // insert new transactions for every new occurrence
                aOccurrences.forEach(oOccurrence => {
                    try {
                        const oNewTransaction = jQuery.extend(true, {}, oPlannedTransaction.transaction);
                        assert(!!oNewTransaction);
                        assert(oNewTransaction != oPlannedTransaction.transaction);
                        assert(!!oPlannedTransaction.uuid);

                        // try to find a transaction with the uuid of the planned transaction on the same day
                        const aTransactionsOnDate = oTransactionManager.getAllTransactionsOnDate(oOccurrence);
                        const aExactMatches = aTransactionsOnDate.filter(oTransaction => oTransaction.plannedTransactionUUID === oPlannedTransaction.uuid);
                        assert(aExactMatches.length === 0);

                        // create new transaction
                        oNewTransaction.occurredOn = oOccurrence;
                        oNewTransaction.createdOn = new Date();
                        oNewTransaction.plannedTransactionUUID = oPlannedTransaction.uuid;
                        this.getOwnerComponent().getTransactionsManager().insertTransaction(oNewTransaction);

                        //console.log(`Creating new ${sRecurrence} transaction on ${oOccurrence}`);
                    } catch (error) {
                        console.error(error);
                    }
                });

            });

        

        oDatabase.setModelProperty("/lastPlannedTransactionsCheck", oNewLastChecked.toISOString());
    }

    /**
     * Creates an rrule for the given start date & reccurrence
     * @param {Date} oStartDate 
     * @param {kellojo.m.TransactionreccurrenceType} sReccurrence
     * @returns {rrule.RRule}
     * @public
     */
    ManagerProto.constructRRule = function(oStartDate, sReccurrence) {
        var oOptions = {
            freq: rrule.Frequency[sReccurrence],
            dtstart: oStartDate,
        };

        // go back for months, where date doesn't exist
        if (sReccurrence === library.TransactionreccurrenceType.MONTHLY) {
            oOptions.bymonthday = [-1];
        }

        return new rrule.RRule(oOptions);
    }




    return oManager;
});