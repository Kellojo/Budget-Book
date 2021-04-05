sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
], function (ManagedObject, Log, JSONModel, Config) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.AppManager", {
        metadata: {
            properties: {
                
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

        // Init AppInfo model
        this.m_oAppInfoModel = null;
        if (this.getOwnerComponent().getIsWebVersion()) {
            setTimeout(() => {
                this.onAppInfoLoaded(null, {
                    isFirstStartUp: false
                });
            }, 1);
        } else {
            this.loadAppInfo();
        }
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



    SchemaProto.openHelpPage = function() {
        if (!this.getOwnerComponent().getIsWebVersion()) {
            api.openHelpPage();
        } else {
            window.open(Config.WEBSITE, "_blank");
        }
    }

    SchemaProto.openChangeLogPage = function() {
        if (!this.getOwnerComponent().getIsWebVersion()) {
            api.openChangeLogPage();
        } else {
            window.open(Config.WEBSITE_CHANGELOG, "_blank");
        }
    }


    return oSchema;
});