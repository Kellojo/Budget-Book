sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/m/Dialog"
], function (Controller, Dialog) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.overview", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        
    };

    ControllerProto.onAddButtonPress = function() {
        /*this.getOwnerComponent().getTransactionsManager().insertTransaction({
            title: "Einkauf EDEKA",
            amount: 52.00,
            relatedTo: "Peter",

            occurredOn: new Date(),
            createdOn: new Date()
        });*/

        this.getOwnerComponent().openDialog("AddTransactionDialog", {
            title: "addTransactionDialogTitle",
            submitButton: true
        });

    };

    return Controller;
});