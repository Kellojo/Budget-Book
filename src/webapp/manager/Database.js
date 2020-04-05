sap.ui.define([
    "com/budgetBook/manager/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel"
], function (ManagedObject, Log, JSONModel) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.Database", {
        metadata: {
            events: {
                update: {}
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

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
        this.getOwnerComponent().notifyDatabaseReady();

        this.fireUpdate();
    };

    SchemaProto.saveData = function() {
        api.saveData(this.m_oDatabaseModel.getData());
    };

    /**
     * Exports the data to an external file
     * @public
     */
    SchemaProto.exportData = function(oParam) {
        Log.info("Exporting Database...");

        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        api.exportData({
            title: oResourceBundle.getText("exportDialogTitle"),
            fileName: "BudgetP Save File.json",
            saveLabel: oResourceBundle.getText("exportDialogSaveLabel"),
            success: oParam.success,
            error: oParam.error,
            data: this.getData()
        });
    }

    /**
     * Exports the data to an external file
     * @public
     */
    SchemaProto.importData = function(oParam) {
        Log.info("Importing Database...");

        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        api.importData({
            title: oResourceBundle.getText("importDialogTitle"),
            buttonLabel: oResourceBundle.getText("importDialogButtonLabel"),
            success: oParam.success,
            error: oParam.error
        });
    }




    SchemaProto.getData = function() {
        return this.m_oDatabaseModel.getData();
    }

    SchemaProto.setModelProperty = function(sPath, oValue) {
        this.m_oDatabaseModel.setProperty(sPath, oValue);
        this.refresh();
    }

    SchemaProto.refresh = function() {
        this.m_oDatabaseModel.refresh(true);
        this.fireUpdate();
        this.saveData();
    }

    return oSchema;
});