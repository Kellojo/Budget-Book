sap.ui.define([], function () {
    "use strict";

    return {
        Beans: {
            manager: [
                "TransactionsManager",
                "Formatter",
                "AppManager",
                "FirebaseManager",
                "Database",
            ]
        },

        SHARED_DIALOGS: {
            AddTransactionDialog: {
                view: "com.budgetBook.view.dialog.AddTransactionDialog"
            },
            SyncWithAppDialog: {
                view: "com.budgetBook.view.dialog.SyncWithAppDialog"
            }
        },


        DEFAULT_CURRENCY: "EUR",
        DEFAULT_IS_TRANSACTION_COMPLETED: true,

        DEFAULT_OVERVIEW_CHART_TYPE: "overTime",


        TRANSACTION_TYPE_EXPENSE: "expense",
        TRANSACTION_TYPE_INCOME: "income",


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