sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "com/budgetBook/Config",
    "com/budgetBook/manager/Formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterType",
    "sap/m/MessageBox",
    "sap/ui/Device",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/Core",
    "sap/m/GroupHeaderListItem",
    "kellojo/m/library",
    "kellojo/m/beans/Sorter",
], function (ControllerBase, Config, Formatter, Filter, FilterOperator, JSONModel, FilterType, MessageBox, Device, DateFormat, Core, GroupHeaderListItem, library, Sorter) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.plannedTransactions", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "plannedTransactions";


    ControllerProto.onInit = function () {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oViewModel = new JSONModel({
            searchQuery: "",
        });
        this.getView().setModel(this.m_oViewModel);

        this.m_oPage = this.byId("idPage");
        this.m_oTable = this.byId("idTable");
    }

    ControllerProto.onPageEnter = function () {
        this.formatPageSubtitle();
    }
    ControllerProto.onPageLeave = function () {
        
    }




    ControllerProto.onTransactionTabChanged = function (oEvent) {
        this.getOwnerComponent().toOverview();
    };

    ControllerProto.onAddPlannedButtonPress = function () {
        const oComponent = this.getOwnerComponent();
        if (oComponent.getTransactionsManager().canAddPlannedTransactions()) {
            oComponent.openDialog("PlanTransactionDialog", {
                title: "planTransactionDialogTitle",
                submitButton: true,
            });
        } else {
            oComponent.openDialog("SubscriptionDialog", {
                title: "subscriptionDialogTitle",
                contentHeight: "550px",
                contentWidth: "432px",
                showHeader: false
            });
        }

        
    };
    ControllerProto.onDeletePlannedTransactionPress = async function (oEvent) {
        var oBindingContext = oEvent.getSource().getBindingContext("Database"),
            oTransaction = oBindingContext.getObject();

        try {
            await this.getOwnerComponent().getMessageManager().showDeleteTransactionWarning();
        } catch (error) {
            return;
        }

        this.getOwnerComponent().getTransactionsManager().deletePlannedTransaction(oTransaction);
    }
    ControllerProto.onTransactionPress = function (oEvent) {
        var oBindingContext = oEvent.getParameter("listItem").getBindingContext("Database"),
            oTransaction = oBindingContext.getObject(),
            sPath = oBindingContext.getPath();

        if (Device.system.phone) {
            this.getOwnerComponent().toTransaction(oTransaction);
        } else {
            this.getOwnerComponent().openDialog("PlanTransactionDialog", {
                title: "addTransactionDialogTitleEditMode",
                submitButton: true,
                transaction: oTransaction,
                fnOnSubmit: function (oTransaction) {
                    this.getOwnerComponent().getTransactionsManager().updatePlannedTransaction(sPath, oTransaction);
                }.bind(this)
            });
        }
    };

    /**
     * Triggered by the searhc, when the search term changes.
     * Also called internally, to filter the list, when acategory in the chart is pressed
     * @param {sap.ui.core.Event || string} oEvent
     * @public
     */
    ControllerProto.onSearch = function (oEvent) {
        if (typeof oEvent === "string") {
            var sQuery = oEvent;

        } else {
            var sQuery = oEvent.getParameter("newValue");
        }

        this.m_oViewModel.setProperty("/searchQuery", sQuery);
        this.updateListFilters();
    }



    ControllerProto.groupTransactions = function (oContext) {
        var sRecurrence = oContext.getProperty("reccurrence");
        return {
            key: sRecurrence,
            title: Core.getLibraryResourceBundle("kellojo.m").getText("reccurrence" + sRecurrence)
        };
    };
    ControllerProto.getGroupHeader = function (oGroup) {
        return new GroupHeaderListItem({
            title: oGroup.title,
            upperCase: false
        });
    };

    /**
     * Updates the list binding filters (i.e. month & search filters)
     * @private 
     */
    ControllerProto.updateListFilters = function (aPlannedTransactions) {
        var oSearchFilter = null,
            oList = this.byId("idTable"),
            oBinding = oList.getBinding("items"),
            sSearchQuery = this.m_oViewModel.getProperty("/searchQuery");

        // Search filter
        var aSearchFilter = [];
        aSearchFilter.push(new Filter({
            path: "transaction/title",
            operator: FilterOperator.Contains,
            value1: sSearchQuery
        }));
        aSearchFilter.push(new Filter({
            path: "transaction/category",
            operator: FilterOperator.Contains,
            value1: sSearchQuery
        }));

        oSearchFilter = new Filter(aSearchFilter, false);
        oBinding.filter(!!sSearchQuery ? oSearchFilter : [], FilterType.Application);

        // manually update page subtitle
       this.formatPageSubtitle();
    };

    ControllerProto.formatStartingFrom = function (sRecurrence, sStartingFrom) {
        const oDateFormat = DateFormat.getInstance(),
            oLibResourceBundle = Core.getLibraryResourceBundle("kellojo.m");

        return this.getOwnerComponent().getResourceBundle().getText("plannedTransactionsPageTransactionDetail", [
            oLibResourceBundle.getText("reccurrence" + sRecurrence),
            oDateFormat.format(new Date(sStartingFrom))
        ]);
    };

    ControllerProto.formatPageSubtitle = function() {
        const sSubTitle = Formatter.formatPageSubtitle(this.m_oTable, this.getOwnerComponent());
        this.m_oPage.setSubTitle(sSubTitle);
        return sSubTitle;
    }


    /**
     * Sortes descending by date
     * @public
     */
    ControllerProto.sortByDate = function (oTransactionA, oTransactionB) {
        const sRecurrenceA = oTransactionA.reccurrence,
            sRecurrenceB = oTransactionB.reccurrence,
            iResult = library.TransactionreccurrenceTypeSortOrder[sRecurrenceA] - library.TransactionreccurrenceTypeSortOrder[sRecurrenceB];
        if (iResult === 0) {
            return Sorter.sortByDate(oTransactionA.startingFrom, oTransactionB.startingFrom);
        }
        return iResult;
    };


    return Controller;
});