sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.dialog.AddTransactionDialog", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.m_oViewModel = new JSONModel({});
        this.getView().setModel(this.m_oViewModel);

        // validation setup
        this.m_aFormFields = [
            {control: this.byId("idTitleInput"), minLength: 3 },
            {control: this.byId("idAmountInput"), minValue: 0 }
        ]
    };

    ControllerProto.onOpenInDialog = function(oSettings) {
        this.m_oSettings = oSettings;

        this.m_oViewModel.setData({
            transaction: {
                title: "",
                amount: 0,
                occurredOn: new Date(),
                currency: "EUR"
            }
        });

        this.m_oViewModel.refresh(true);
        this.resetValidation();
    };

    ControllerProto.onSubmitButtonPress = function() {
        var bIsValid = this.validateControls();
        if (bIsValid) {
            this.m_oSettings.fnOnSubmit(this.m_oViewModel.getProperty("/transaction"));
        }

        return this.validateControls();
    };

    

    return Controller;
});