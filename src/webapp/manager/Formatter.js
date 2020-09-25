sap.ui.define([
    "kellojo/m/manager/BeanBase",
    "sap/ui/core/format/NumberFormat",
], function (BeanBase, NumberFormat) {
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
    }

    return Formatter;
});