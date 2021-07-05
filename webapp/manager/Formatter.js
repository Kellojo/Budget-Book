sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/core/format/NumberFormat",
    "com/budgetBook/Config",
    "sap/ui/core/Core",
], function (BeanBase, NumberFormat, Config, Core) {
    "use strict";

    var Formatter = BeanBase.extend("com.budgetBook.manager.Formatter", {});

    /**
     * Formats date in the long format (i.e. 10 seconds ago)
     * @param {string} oDate
     * @returns {stering}
     * @public
     */
    Formatter.fromNow = function(oDate) {
        if (!oDate) {
            return;
        }

        return moment(oDate).fromNow();
    };

    /**
     * Formats a currency value
     * @param {number} iValue
     * @param {string} sCurrency
     * @returns {string} 
     */
    Formatter.formatCurrency = function(iValue, sCurrency) {
        return NumberFormat.getCurrencyInstance({
            currencyCode: false
        }).format(iValue, sCurrency);
    };



    /**
    * Formats the page subtitle
    * @param {sap.m.Table} oTable
    * @param {sap.ui.core.Component} oComponent
    * @returns {string} 
    * @public
    */
    Formatter.formatPageSubtitle = function (oTable, oComponent) {
        var aItems = oTable.getItems(),
            iTransactionCount = 0,
            iTransactionVolume = 0,
            sTransactionVolume = "";

        aItems.forEach((oItem) => {
            if (oItem.getMetadata().getName() === "sap.m.GroupHeaderListItem") {
                return;
            }

            const oPlannedTransaction = oItem.getBindingContext("Database").getObject();
            if (!oPlannedTransaction) {
                return;
            }

            const oTransaction = oPlannedTransaction.transaction || oPlannedTransaction;
            iTransactionCount++;

            // can be undefined, in case of a deleted transaction
            if (!!oTransaction) {
                if (oTransaction.type == Config.TRANSACTION_TYPE_EXPENSE) {
                    iTransactionVolume -= oTransaction.amount;
                } else {
                    iTransactionVolume += oTransaction.amount;
                }
            }
        });

        sTransactionVolume = Formatter.formatCurrency(iTransactionVolume, oComponent.getPreferenceManager().getPreference("/currency"));
        return oComponent.getResourceBundle().getText(
            iTransactionCount < 2 ? "overviewPageSubtitle" : "overviewPageSubtitlePlural",
            [iTransactionCount, sTransactionVolume]
        );
    }

    /**
     * Get's the transaction recurrence by the planned transaction uuid
     * @param {string} sPlannedTransactionID - the planned transaction uuid
     * @returns {string}
     * @public
     */
    Formatter.formatPlannedTransactionRecurranceByID = function(sPlannedTransactionID) {
        const oComponent = this.getOwnerComponent();
        const oPlannedTransaction = oComponent.getTransactionsManager().getPlannedTransactionById(sPlannedTransactionID);

        if (!!oPlannedTransaction) {
            const sRecurrance = oPlannedTransaction.reccurrence;
            return Core.getLibraryResourceBundle("kellojo.m").getText("reccurrence" + sRecurrance);
        }

        return false;
    }

    /**
     * Formats the difference between two dates as HH:MM:SS
     * @param {Date} oDate1 
     * @param {Date} oDate2 
     * @returns {string}
     */
    Formatter.diffBetweenDate = function(oDate1, oDate2) {
        var diff = new Date(oDate1 - oDate2);
        var hour = diff.getUTCHours();
        var min = diff.getUTCMinutes();
        var sec = diff.getUTCSeconds();
        return `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }

    return Formatter;
});