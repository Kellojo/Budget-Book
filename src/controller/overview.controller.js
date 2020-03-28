sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/m/GroupHeaderListItem",
], function (Controller, GroupHeaderListItem) {
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



    /**
     * Sortes descending by date
     * @public
     */
    ControllerProto.sortByDate = function(oDateA, oDateB) {
        var iDateA = oDateA,
            iDateB = oDateB;
        if (typeof oDateA === "string") {
            iDateA = new Date(oDateA).getTime();
        }

        if (typeof oDateB !== "number") {
            iDateB = new Date(oDateB).getTime();
        }

        return iDateB - iDateA;
    };

    /**
     * Groups the transactions by month
     * @public
     */
    ControllerProto.groupTransactions = function(oContext) {
        var oTransaction = oContext.getObject(),
            sDate = oTransaction.occurredOn,
            oDate = new Date(sDate),
            iMonth = oDate.getMonth();

        return iMonth;
    };

    /**
     * Creates a group header for the given month
     * @public 
     */
    ControllerProto.getGroupHeader = function(oMonth) {
        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        return new GroupHeaderListItem({
            title: oResourceBundle.getText("monthWithIndex_" + oMonth.key),
            upperCase: false
        });
    };

    // ----------------------------------
    // Formatters
    // ----------------------------------

    /**
     * Get's all distinct years from a set of transactions
     * @param {array} aTransactions
     * @returns {array} 
     * @public
     */
    ControllerProto.formatAvailableYears = function(aTransactions) {
        console.log(aTransactions);
        
        if (!aTransactions) {
            return [];
        }

        var aYears = [];

        aTransactions.forEach((oTransaction) => {
            var oDate = oTransaction.createdOn;
            if (typeof oTransaction.createdOn === "number") {
                oDate = new Date(oTransaction.createdOn);
            }
            var iYear = oDate.getFullYear();

            if (!(iYear in aYears)) {
                aYears.push(iYear);
            }
        });

        console.log(aYears);

        return aYears;
    }

    return Controller;
});