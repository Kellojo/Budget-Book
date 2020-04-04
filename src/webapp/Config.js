sap.ui.define([], function () {
    "use strict";

    return {
        Beans: {
            manager: [
                "TransactionsManager",
                "Database",
                "Formatter",
                "AppManager",
            ]
        },

        SHARED_DIALOGS: {
            AddTransactionDialog: {
                view: "com.budgetBook.view.dialog.AddTransactionDialog"
            }
        },


        DEFAULT_CURRENCY: "EUR"

    };
});