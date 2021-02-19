sap.ui.define([
    "com/budgetBook/controller/dialog/TransactionEditorBase.controller",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], function (ControllerBase, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.PlanTransactionDialog", {}),
        ControllerProto = Controller.prototype;


    ControllerProto.onOpenInDialog = async function(oSettings) {
        await ControllerBase.prototype.onOpenInDialog.apply(this, arguments);

        // Setup transaction
        const oTransactionsManager = this.getOwnerComponent().getTransactionsManager();
        var oPlannedTransaction = oTransactionsManager.getDefaultPlannedTransaction();

        // Get transaction from settings, if this is the edit mode
        if (oSettings.hasOwnProperty("transaction")) {
            oPlannedTransaction = jQuery.extend(true, {}, oSettings.transaction);
            oPlannedTransaction.startingFrom = new Date(oPlannedTransaction.startingFrom);
            oPlannedTransaction.transaction.occurredOn = new Date(oPlannedTransaction.transaction.occurredOn);
        }

        // Update view model
        this.m_oViewModel.setProperty("/minDate", !!oSettings.hasOwnProperty("transaction") ?  new Date(0) : new Date());
        this.m_oTransactionModel.setData(oPlannedTransaction)
        this.m_oTransactionModel.refresh(true);
    };

    ControllerProto.onSubmitButtonPress = function() {
        const bIsValid = this.m_oTransactionEditor.validateControls();
        if (bIsValid) {
            var oPlannedTransaction = this.m_oTransactionModel.getData();
            oPlannedTransaction.transaction.occurredOn = oPlannedTransaction.transaction.occurredOn.toISOString();
            oPlannedTransaction.startingFrom =  oPlannedTransaction.startingFrom.toISOString();
            oPlannedTransaction.createdOn = new Date().toISOString();

            if (!!this.m_oSettings.fnOnSubmit) {
                // let the caller handle
                this.m_oSettings.fnOnSubmit(oPlannedTransaction);
            } else {
                this.getOwnerComponent().getTransactionsManager().insertPlannedTransaction(oPlannedTransaction);
            }
            this.m_oTransactionModel.setData(null);
            this.m_oSettings = null;
        }

        return bIsValid;
    };

    return Controller;
});