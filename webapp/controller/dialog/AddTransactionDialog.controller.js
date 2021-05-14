sap.ui.define([
    "com/budgetBook/controller/dialog/TransactionEditorBase.controller",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], function (ControllerBase, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.AddTransactionDialog", {}),
        ControllerProto = Controller.prototype;
    
    ControllerProto.ROUTE_NAME = "transaction";

    ControllerProto.onPageEnter = async function(oEvent) {
        const sTransactionId = oEvent.getParameter("arguments").transactionId,
            bIsExistingTransaction = sTransactionId !== "new";

        var oComponent = this.getOwnerComponent(),
            oResourceBundle = oComponent.getResourceBundle();

        var  oSettings = {};
        this.m_oViewModel.setProperty("/isExistingTransaction", bIsExistingTransaction);
        this.m_oViewModel.setProperty("/title", oResourceBundle.getText(bIsExistingTransaction ? "addTransactionDialogTitleEditMode": "addTransactionDialogTitle"));
        
        if (bIsExistingTransaction) {
            oSettings.transactionId = sTransactionId;
            this.m_oViewModel.setProperty("/isLoading", true);
            oSettings.transaction = await oComponent.getTransactionsManager().loadTransaction(sTransactionId);
            this.m_oViewModel.setProperty("/isLoading", false);   
        }

        this.onOpenInDialog(oSettings);
        await ControllerBase.prototype.onPageEnter.apply(this, arguments);
    }

    ControllerProto.onOpenInDialog = async function(oSettings) {
        await ControllerBase.prototype.onOpenInDialog.apply(this, arguments);
        const oTransactionsManager = this.getOwnerComponent().getTransactionsManager();

        // Setup transaction
        var oTransaction = oTransactionsManager.getDefaultTransaction();

        // Get transaction from settings, if this is the edit mode
        if (oSettings.hasOwnProperty("transaction")) {
            oTransaction = jQuery.extend(true, {}, oSettings.transaction);
            oTransaction.occurredOn = new Date(oTransaction.occurredOn);
        }

        // Update view model
        this.m_oTransactionModel.setData(oTransaction)
        this.m_oTransactionModel.refresh(true);
    };

    ControllerProto.onSubmitButtonPress = function() {
        const bIsValid = this.m_oTransactionEditor.validateControls();
        if (bIsValid) {
            var oTransaction = this.m_oTransactionModel.getData();
            oTransaction.occurredOn = oTransaction.occurredOn.toISOString();
            oTransaction.createdOn = new Date().toISOString();

            if (!!this.m_oSettings.fnOnSubmit) {
                this.m_oSettings.fnOnSubmit(oTransaction);
            } else {
                this.onSubmitWebVersion(oTransaction);
            }

            this.m_oTransactionModel.setData(null);
            this.m_oSettings = null;
        }

        return bIsValid;
    };

    ControllerProto.onSubmitWebVersion = async function(oTransaction) {
        const oComponent = this.getOwnerComponent(),
            oResouceBundle = oComponent.getResourceBundle();

        if (!!this.m_oSettings.transactionId) {
            // update existing
            await oComponent.getTransactionsManager().updateTransaction(
                this.m_oSettings.transactionId,
                oTransaction
            );
            MessageToast.show(oResouceBundle.getText("updateTransactionSuccess"));
        } else {
            // insert new
            await oComponent.getTransactionsManager().insertTransaction(oTransaction);
            MessageToast.show(oResouceBundle.getText("insertTransactionSuccess"));
        }

        oComponent.navBack();
    }

    ControllerProto.onDeletePress = function() {
        var oComponent = this.getOwnerComponent(),
            oResourceBundle = oComponent.getResourceBundle(),
            sDeleteAction = oResourceBundle.getText("dialogDelete");

        MessageBox.warning(oResourceBundle.getText("deleteTransactionWarning"), {
            emphasizedAction: sDeleteAction,
            actions: [
                oResourceBundle.getText("dialogCancel"),
                sDeleteAction
            ],
            onClose: function(sAction) {
                if (sAction === sDeleteAction) {
                    oComponent.getTransactionsManager().deleteTransaction(this.m_oSettings.transactionId);
                    oComponent.navBack();
                }
            }.bind(this)
        });
    }



    return Controller;
});