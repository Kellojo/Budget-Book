sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
], function (ControllerBase, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.AddTransactionDialog", {}),
        ControllerProto = Controller.prototype;
    
    ControllerProto.ROUTE_NAME = "transaction";

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oViewModel = new JSONModel({
            isLoading: false,
            categories: [],
            isExistingTransaction: false,
            title: ""
        });
        this.getView().setModel(this.m_oViewModel);

        this.m_oTransactionModel = new JSONModel({});
        this.getView().setModel(this.m_oTransactionModel, "transaction");
        this.m_oTransactionEditor = this.byId("idTransactionEditor");
    };

    ControllerProto.onPageEnter = async function(oEvent) {
        var oComponent = this.getOwnerComponent(),
            oResourceBundle = oComponent.getResourceBundle();

        var sTransactionId = oEvent.getParameter("arguments").transactionId,
            oSettings = {};

        this.m_oViewModel.setProperty("/isExistingTransaction", sTransactionId !== "new");
        if (sTransactionId !== "new") {
            oSettings.transactionId = sTransactionId;
            
            this.m_oViewModel.setProperty("/isLoading", true);
            oSettings.transaction = await oComponent.getTransactionsManager().loadTransaction(sTransactionId);
            this.m_oViewModel.setProperty("/isLoading", false);
            this.m_oViewModel.setProperty("/title", oResourceBundle.getText("addTransactionDialogTitleEditMode"));
        } else {
            this.m_oViewModel.setProperty("/title", oResourceBundle.getText("addTransactionDialogTitle"));
        }

        this.onOpenInDialog(oSettings);

        // load categories
        this.m_oViewModel.setProperty(
            "/categories", 
            await this.getOwnerComponent().getTransactionsManager().getAllCategoriesFirebase()
        );
    }

    ControllerProto.onOpenInDialog = async function(oSettings) {
        this.m_oSettings = oSettings;

        // reset combobox...
        //this.byId("idCategoryInput").setSelectedKey("");
        let oTransactionsManager = this.getOwnerComponent().getTransactionsManager();

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
        this.m_oViewModel.setProperty( "/categories",  oTransactionsManager.getAllCategories());

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
            var oTransaction = this.m_oTransactionModel.getData();
            oTransaction.occurredOn = oTransaction.occurredOn.toISOString();
            oTransaction.createdOn = new Date().toISOString();

            if (!!this.m_oSettings.fnOnSubmit) {
                // let the caller handle
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
        var oComponent = this.getOwnerComponent(),
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
        this.m_oTransactionModel.setData(null);
        this.m_oSettings = null;
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

    ControllerProto.onBackButtonPress = function() {
        this.getOwnerComponent().navBack();
    }

    

    return Controller;
});