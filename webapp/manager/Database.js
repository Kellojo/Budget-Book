sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/base/Log",
    "sap/ui/model/json/JSONModel",
    "com/budgetBook/Config",
    "sap/ui/model/ChangeReason",
    "sap/m/MessageBox"
], function (ManagedObject, Log, JSONModel, Config, ChangeReason, MessageBox) {
    "use strict";

    var oSchema = ManagedObject.extend("com.budgetBook.manager.Database", {
        metadata: {
            events: {
                update: {},
                dataLoaded: {}
            }
        }
    }),
        SchemaProto = oSchema.prototype;

    
    SchemaProto.onInit = function() {

        // Init Database model
        this.m_oDatabaseModel = null;

        var oComponent = this.getOwnerComponent();
        this.m_oDatabaseModel = new JSONModel({transactions: []});
        this.m_oDatabaseModel.setSizeLimit(Config.MODEL_SIZE_LIMIT);
        this.getOwnerComponent().setModel(this.m_oDatabaseModel, "Database");

        if (oComponent.getIsWebVersion()) {
            this.getOwnerComponent().notifyDatabaseReady();
            oComponent.getFirebaseManager().attachUserSignedIn(this.loadData.bind(this));
        } else {
            this.loadData();
        }
        
    };


    /**
     * Loads the data from the disk or attaches a handler for the web version
     * @private
     */
    SchemaProto.loadData = function() {
        if (this.getOwnerComponent().getIsWebVersion()) {
            Log.info("Loading Database from firebase...");
            this.getOwnerComponent().getTransactionsManager().listenForSynchronizeableTransactions(
                this.onDataLoadedWeb.bind(this)
            );
           
        } else {
            Log.info("Loading Database...");
            api.loadData(this.onDataLoaded.bind(this));
        }
    };

    /**
     * Called, when the data has been loaded successfully
     * @param {sap.ui.base.event} oEvent 
     * @param {object} oData 
     * @private
     */
    SchemaProto.onDataLoaded = function(oEvent, oData) {
        Log.info("Database loaded");

        this._injectPotentiallyMissingPropertiesIntoDB(oData);
        this.m_oDatabaseModel.setData(oData);
        this.m_oDatabaseModel.refresh(true);
        this.m_oDatabaseModel.attachPropertyChange(this._onPropertyChange.bind(this));
        this.getOwnerComponent().setModel(this.m_oDatabaseModel, "Database");
        this.fireUpdate();
        this.fireDataLoaded();
        this.getOwnerComponent().notifyDatabaseReady();
    };

    /**
     * Called, when the data has been loaded successfully on the web version (i.e. collection change)
     * @param {firebase.document} aDocuments 
     * @private
     */
    SchemaProto.onDataLoadedWeb = function(aDocuments) {
        var aTransactions = [];
        aDocuments.forEach((oDoc) => {
            var oTransaction = oDoc.data();
            oTransaction.id = oDoc.id;
            aTransactions.push(oTransaction);
        });
        this.m_oDatabaseModel.setProperty("/transactions", aTransactions);
    }

    /**
     * Injects any new properties into the database, which might be missing initially
     * @private
     */
    SchemaProto._injectPotentiallyMissingPropertiesIntoDB = function(oData) {
        
        // Preferences
        if (!oData.preferences) {
            oData.preferences = {};
        }
        if (!oData.preferences.currentOverviewChartType) {
            oData.preferences.currentOverviewChartType = Config.DEFAULT_OVERVIEW_CHART_TYPE;
        }

        if (!oData.plannedTransactions) {
            oData.plannedTransactions = [];
        }

        // Inject isComplete flag into transactions
        if (oData.transactions) {
            oData.transactions.forEach((oTransaction) => {
                if (!oTransaction.hasOwnProperty("isCompleted")) {
                    oTransaction.isCompleted = Config.DEFAULT_IS_TRANSACTION_COMPLETED;
                }

                // remove accidentally added categories property on the transaction
                if (oTransaction.hasOwnProperty("categories")) {
                    delete oTransaction.categories;
                }
            });
        }

    };

    SchemaProto.saveData = function() {
        api.saveData(this.m_oDatabaseModel.getData());
    };

    /**
     * Handles the two way binding property changes of the database model
     * @param {	sap.ui.base.Event} oEvent
     * @private
     */
    SchemaProto._onPropertyChange = function(oEvent) {
        var sReason = oEvent.getParameter("reason");

        if (sReason == ChangeReason.Binding) {
            this.saveData();
        }
    }

    /**
     * Exports the data to an external file
     * @public
     */
    SchemaProto.exportData = function(oParam) {
        Log.info("Exporting Database...");

        oParam = !!oParam ? oParam : {};

        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        api.exportData({
            title: oResourceBundle.getText("exportDialogTitle"),
            fileName: "BudgetP Save File.json",
            saveLabel: oResourceBundle.getText("exportDialogSaveLabel"),
            success: function() {
                MessageToast.show(oResourceBundle.getText("exportDataSuccess"))

                if (typeof oParam.success === "function") {
                    oParam.success();
                }
            },
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
            success: function(oData) {
                if (!!oData.transactions && typeof Array.isArray(oData.transactions)) {
                    this.m_oDatabaseModel.setData(oData);
                    this.refresh();
                    oParam.success();
                } else {
                    oParam.error("importErrorParseException", "");
                }
            }.bind(this),
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