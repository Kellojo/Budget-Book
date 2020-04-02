sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel"
], function (ManagedObject, Log, JSONModel) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.AppManager", {}),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.init = function() {

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
    };

    return oSchema;
});