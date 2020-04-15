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


        DEFAULT_CURRENCY: "EUR",
        DEFAULT_IS_TRANSACTION_COMPLETED: true,

        DEFAULT_OVERVIEW_CHART_TYPE: "overTime",


        TRANSACTION_TYPE_EXPENSE: "expense",
        TRANSACTION_TYPE_INCOME: "income",


    };
});