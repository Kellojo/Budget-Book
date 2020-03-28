sap.ui.define([], function () {
    "use strict";

    return {
        Beans: {
            manager: [
                "TransactionsManager"
            ],
            schema: [
                "Database"
            ]
        },

        SHARED_DIALOGS: {
            AddTransactionDialog: {
                view: "com.budgetBook.view.dialog.AddTransactionDialog"
            }
        }

    };
});