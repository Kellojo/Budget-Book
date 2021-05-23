sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/m/MessageToast",
    "kellojo/m/thirdparty/MessageBox",
], function (ControllerBase, JSONModel, Config, MessageToast, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.dialog.TransactionEditorBase", {}),
        ControllerProto = Controller.prototype;


    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);
    
        this.m_oViewModel = new JSONModel({
            isLoading: false,
            categories: [],
            titleSuggestions: [],
            minDate: new Date(),
            isExistingTransaction: false,
        });
        this.getView().setModel(this.m_oViewModel);
        this.m_oViewModel.setSizeLimit(Config.MODEL_SIZE_LIMIT);
    
        this.m_oTransactionModel = new JSONModel({});
        this.getView().setModel(this.m_oTransactionModel, "transaction");
        this.m_oTransactionEditor = this.byId("idTransactionEditor");
    };

    ControllerProto.onOpenInDialog = async function(oSettings) {
        this.m_oSettings = oSettings;
        const oTransactionsManager = this.getOwnerComponent().getTransactionsManager();

        // Update view model
        this.m_oViewModel.setProperty( "/categories",  oTransactionsManager.getAllCategories());
        this.m_oViewModel.setProperty("/titleSuggestions", oTransactionsManager.getAllTitles());
        this.m_oTransactionEditor.resetValidation();

        // focus title field for new transactions
        if (!oSettings.hasOwnProperty("transaction")) {
            setTimeout(() => {
                this.m_oTransactionEditor.focusTitle();
            }, 400);
        }
    };

    ControllerProto.onPageEnter = async function(oEvent) {
        // load categories
        this.m_oViewModel.setProperty(
            "/categories", 
            await this.getOwnerComponent().getTransactionsManager().getAllCategoriesFirebase()
        );
    }

    ControllerProto.onBackButtonPress = function() {
        this.getOwnerComponent().navBack();
    }

    return Controller;
});