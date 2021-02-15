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


    ControllerProto.onToStep1Press = function() {
        this.m_oNavContainer.to(this.byId("idTransactionsPage"));
    }
    ControllerProto.onToStep2Press = function () {
        this.m_oNavContainer.to(this.byId("idPlanTransactionsPage"));
    }
    ControllerProto.onToStep3Press = function() {
        this.m_oNavContainer.to(this.byId("idMobileAppPage"));
    }


    ControllerProto.onGetStartedPress = function () {
        this.m_oNavContainer.to(this.byId("idGetStartedPage"));
    }

    ControllerProto.onGetMobileAppPress = function() {
        this.getOwnerComponent().getAppManager().openHelpPage();
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