sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel"
], function (ManagedObject, Log, JSONModel) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.Database", {}),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.init = function() {

        // Init Database model
        this.m_oDatabaseModel = null;
        this.loadData();
    };


    SchemaProto.loadData = function() {
        Log.info("Loading Database...");
        api.loadData(this.onDataLoaded.bind(this));
    };

    SchemaProto.onDataLoaded = function(oEvent, oData) {
        Log.info("Database loaded");

        this.m_oDatabaseModel = new JSONModel(oData);
        this.getOwnerComponent().setModel(this.m_oDatabaseModel, "Database");
        this.getOwnerComponent().notifyPageLoaded();
    };


    SchemaProto.saveData = function() {
        api.saveData(this.m_oDatabaseModel.getData());
    };


    SchemaProto.getData = function() {
        return this.m_oDatabaseModel.getData();
    }

    SchemaProto.refresh = function() {
        this.m_oDatabaseModel.refresh(true);
        this.saveData();
    }

    return oSchema;
});