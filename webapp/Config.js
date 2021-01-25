sap.ui.define([
    "kellojo/m/library",
    "kellojo/m/beans/ThemeManager",
], function (library, ThemeManager) {
    "use strict";

    return {
        Beans: {
            manager: [
                "TransactionsManager",
                "Formatter",
                "AppManager",
                "FirebaseManager",
                "Database",
                "PreferenceManager",
            ],

            directReferences: [
                ThemeManager
            ]
        },

        SHARED_DIALOGS: {
            AddTransactionDialog: {
                view: "com.budgetBook.view.dialog.AddTransactionDialog"
            },
            PlanTransactionDialog: {
                view: "com.budgetBook.view.dialog.PlanTransactionDialog"
            },
            SyncWithAppDialog: {
                view: "com.budgetBook.view.dialog.SyncWithAppDialog"
            }
        },

        MODEL_SIZE_LIMIT: 10000,

        DEFAULT_IS_TRANSACTION_COMPLETED: true,
        DEFAULT_PLANNED_TRANSACTION_RECURRENCE: library.TransactionreccurrenceType.MONTHLY,

        DEFAULT_OVERVIEW_CHART_TYPE: "overTime",
        DEFAULT_CURRENCY: "EUR",

        TRANSACTION_TYPE_EXPENSE: "expense",
        TRANSACTION_TYPE_INCOME: "income",

        AVAILABLE_CURRENCIES: [
            {
                code: "USD",
            },
            {
                code: "EUR",
            },
            {
                code: "JPY",
            },
            {
                code: "GBP",
            },
            {
                code: "AUD",
            },
            {
                code: "CAD",
            },
            {
                code: "CHF",
            },
            {
                code: "CNY",
            },
            {
                code: "HKD",
            },
            {
                code: "NZD",
            },
            {
                code: "SEK",
            },
        ],


        FIREBASE: {
            apiKey: "AIzaSyDF4H6-j5wCSPt5HLPLakVLQrea5WOLNwQ",
            authDomain: "budget-book-7ebd4.firebaseapp.com",
            databaseURL: "https://budget-book-7ebd4.firebaseio.com",
            projectId: "budget-book-7ebd4",
            storageBucket: "budget-book-7ebd4.appspot.com",
            messagingSenderId: "243765855914",
            appId: "1:243765855914:web:94ddd61389b9883a6a32d3"
        },


        WEBSITE: "https://kellojo.github.io/Budget-Book/",


    };
});