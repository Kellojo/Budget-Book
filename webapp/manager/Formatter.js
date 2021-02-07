sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/ui/core/format/NumberFormat",
    "com/budgetBook/Config",
], function (BeanBase, NumberFormat, Config) {
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

    return Formatter;
});