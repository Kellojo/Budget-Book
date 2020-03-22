sap.ui.define([
    "./ControllerBase"
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.overview", {}),
        ControllerProto = Controller.prototype;

    
    ControllerProto.onInit = function() {
        this.getOwnerComponent().notifyPageLoaded();
    };

    return Controller;
});