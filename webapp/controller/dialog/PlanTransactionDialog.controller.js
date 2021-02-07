sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], function (ControllerBase, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.PlanTransactionDialog", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oViewModel = new JSONModel({
            isLoading: false,
            categories: [],
            minDate: new Date(),
        });
        this.getView().setModel(this.m_oViewModel);

        this.m_oTransactionModel = new JSONModel({});
        this.getView().setModel(this.m_oTransactionModel, "transaction");
        this.m_oTransactionEditor = this.byId("idTransactionEditor");
    };

    ControllerProto.onOpenInDialog = async function(oSettings) {
        this.m_oSettings = oSettings;

        let oTransactionsManager = this.getOwnerComponent().getTransactionsManager();

        // Setup transaction
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
        this.m_oViewModel.setProperty( "/categories", this.getOwnerComponent().getTransactionsManager().getAllCategories());

        this.m_oTransactionEditor.resetValidation();
        
        // focus title field for new transactions
        if (!oSettings.hasOwnProperty("transaction")) {
            setTimeout(() => {
                this.m_oTransactionEditor.focusTitle();
            }, 400);
        }
    };

    ControllerProto.onSubmitButtonPress = function() {
        var bIsValid = this.m_oTransactionEditor.validateControls();
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