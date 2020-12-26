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
        var oComponent = this.getOwnerComponent(),
            oResourceBundle = oComponent.getResourceBundle();
        oComponent.getDatabase().importData({
            success: function() {
                MessageToast.show(oResourceBundle.getText("importSuccess"));
                oComponent.toOverview();
            }.bind(this),
            error: function(sErrorKey, sErrorDetail) {
                MessageToast.show(oResourceBundle.getText(sErrorKey, [sErrorDetail]));
            }.bind(this)
        });
    }

    ControllerProto.onStartFreshPress = function() {
        this.getOwnerComponent().toOverview();
    }

    return Controller;
});