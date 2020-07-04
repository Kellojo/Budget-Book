sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel"
], function (ManagedObject, Log, JSONModel) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.AppManager", {
        metadata: {
            properties: {
                showAppHeader: {type: "boolean", defaultValue: false},
                showBackButton: {
                    type: "boolean",
                    defaultValue: false
                }
            },

            events: {
                saveButtonPress: {}
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

        // Init app header model
        this.m_oAppHeaderModel = new JSONModel({
            isAppHeaderVisible : this.getShowAppHeader(),
            showBackButton: this.getShowBackButton(),
            showAddButton: false,
            showSaveButton: false
        });
        this.getOwnerComponent().setModel(this.m_oAppHeaderModel, "AppHeader");

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

    SchemaProto.setShowAppHeader = function(bVisible) {
        this.m_oAppHeaderModel.setProperty("/isAppHeaderVisible", !!bVisible);
        return this;
    }

    SchemaProto.setShowAddButton = function(bVisible) {
        this.m_oAppHeaderModel.setProperty("/showAddButton", !!bVisible);
        return this;
    }

    SchemaProto.setShowSaveButton = function(bVisible) {
        this.m_oAppHeaderModel.setProperty("/showSaveButton", !!bVisible);
        return this;
    }

    SchemaProto.setShowMenuButton = function(bVisible) {
        this.m_oAppHeaderModel.setProperty("/showMenuButton", !!bVisible);
        return this;
    }

    SchemaProto.setShowBackButton = function (bVisible) {
        this.m_oAppHeaderModel.setProperty("/showBackButton", !!bVisible);
        return this;
    }



    SchemaProto.openHelpPage = function() {
        api.openHelpPage();
    }


    return oSchema;
});