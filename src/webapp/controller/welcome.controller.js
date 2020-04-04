sap.ui.define([
    "com/budgetBook/controller/ControllerBase"
], function (ControllerBase) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.welcome", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "welcome";

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oNavContainer = this.byId("idNavContainer");
    };


    ControllerProto.onPageEnter = function() {
        this.getOwnerComponent().getAppManager().setShowAppHeader(false);
    }


    ControllerProto.onGetStartedPress = function() {
        this.m_oNavContainer.to(this.byId("idGetStartedPage"));
    }

    return Controller;
});