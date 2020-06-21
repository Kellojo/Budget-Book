sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/m/MessageToast",
], function (ControllerBase, MessageToast) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.transaction", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "transaction";


    ControllerProto.onInit = function () {
        ControllerBase.prototype.onInit.apply(this, arguments);

    };


    ControllerProto.onPageEnter = function (oSettings) {
        this.getOwnerComponent().getAppManager().setShowBackButton(true);
    }

    return Controller;
});