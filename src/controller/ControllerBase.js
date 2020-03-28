sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/budgetBook/manager/Formatter"
], function (Controller, Formatter) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.ControllerBase", {
        formatter: Formatter
    }),
        ControllerProto = Controller.prototype;


    ControllerProto.handleRouteMatched = function (event) {
        //Check whether this page is matched.
        if (event.getParameter("name") !== this.name) {
            return;
        }

        this.onPageEnter(event);
    };

    return Controller;
});