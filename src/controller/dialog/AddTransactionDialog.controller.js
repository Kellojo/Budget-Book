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
    };

    

    return Controller;
});