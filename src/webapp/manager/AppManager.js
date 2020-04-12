sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel"
], function (ManagedObject, Log, JSONModel) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.AppManager", {
        metadata: {
            properties: {
                showAppHeader: {type: "boolean", defaultValue: false}
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

        // Init app header model
        this.m_oAppHeaderModel = new JSONModel({
            isAppHeaderVisible : this.getShowAppHeader()
        });
        this.getOwnerComponent().setModel(this.m_oAppHeaderModel, "AppHeader");

        // Init AppInfo model
        this.m_oAppInfoModel = null;
        this.loadAppInfo();
    };


    SchemaProto.loadAppInfo = function() {
        Log.info("Loading AppInfo...");
        api.loadAppInfo(this.onAppInfoLoaded.bind(this));
    };

    SchemaProto.onAppInfoLoaded = function(oEvent, oData) {
        Log.info("AppInfo loaded");

        this.m_oAppInfoModel = new JSONModel(oData);
        this.getOwnerComponent().setModel(this.m_oAppInfoModel, "AppInfo");
        this.getOwnerComponent().notifyAppInfoReady();
    };


    // ----------------------------
    // Getter & Setter
    // ----------------------------

    SchemaProto.getAppInfo = function() {
        return this.m_oAppInfoModel.getData();
    }

    SchemaProto.setShowAppHeader = function(bVisible) {
        this.m_oAppHeaderModel.setProperty("/isAppHeaderVisible", !!bVisible);
    }


    SchemaProto.openHelpPage = function() {
        api.openHelpPage();
    }


    return oSchema;
});