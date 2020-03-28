sap.ui.define([
    "com/budgetBook/manager/BeanBase",
], function (BeanBase) {
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

    return Formatter;
});