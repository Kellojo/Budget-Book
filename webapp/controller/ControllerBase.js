sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/budgetBook/manager/Formatter"
], function (Controller, Formatter) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.ControllerBase", {
        formatter: Formatter
    }),
        ControllerProto = Controller.prototype;

    ControllerProto.onInit = function() {
        this.getOwnerComponent().getRouter().attachRouteMatched(this.onRouteMatched, this);
        this._navDelegate = { onBeforeHide: this.onPageLeave.bind(this, this.ROUTE_NAME) };
        this.getView().addEventDelegate(this._navDelegate, this);
    };

    ControllerProto.onExit = function () {
        this.getOwnerComponent().getRouter().detachRouteMatched(this.onRouteMatched, this);
    }

    ControllerProto.onRouteMatched = function (oEvent) {
        //Check whether this page is matched.
        if (oEvent.getParameter("name") !== this.ROUTE_NAME) {
            return;
        }

        if (typeof this.onPageEnter === "function") {
            this.onPageEnter(oEvent);
        }
    };

    ControllerProto.onPageLeave = function(sRouteName) {
        
    }

    return Controller;
});