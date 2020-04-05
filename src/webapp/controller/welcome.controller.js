sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "sap/m/MessageToast",
], function (ControllerBase, MessageToast) {
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

    ControllerProto.onImportFilePress = function() {
        this.getOwnerComponent().getDatabase().importData({
            success: (oData) => {
                console.log(oData);
                MessageToast.show(JSON.stringify(oData));
            },
            error: (sErrorKey, sErrorDetail) => {
                var oResourceBundle = this.getOwnerComponent().getResourceBundle();
                MessageToast.show(oResourceBundle.getText(sErrorKey, [sErrorDetail]));
            }
        });
    }

    return Controller;
});