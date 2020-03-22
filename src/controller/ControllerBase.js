sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("com.budgetBook.controller.ControllerBase", {
        
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