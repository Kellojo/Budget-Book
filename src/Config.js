sap.ui.define([], function () {
    "use strict";

    return {
        Beans: {
            manager: [
                "TransactionsManager",
                "Database",
                "Formatter"
            ]
        },

        SHARED_DIALOGS: {
            AddTransactionDialog: {
                view: "com.budgetBook.view.dialog.AddTransactionDialog"
            }
        }

    };
});