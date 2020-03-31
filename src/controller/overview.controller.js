sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "com/budgetBook/Config",
    "com/budgetBook/manager/Formatter",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
], function (ControllerBase, Config, Formatter, Filter, FilterOperator, JSONModel) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.overview", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "overview";

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oViewModel = new JSONModel({
            months: [],
            currentTab: null,
            searchQuery: "",
        });
        this.getView().setModel(this.m_oViewModel);

        this.getOwnerComponent().getDatabase().attachUpdate(this.updateTabs.bind(this))
    };

    ControllerProto.onPageEnter = function() {
        this.updateTabs();
    };

    ControllerProto.onAddButtonPress = function() {
        this.getOwnerComponent().openDialog("AddTransactionDialog", {
            title: "addTransactionDialogTitle",
            submitButton: true,
            fnOnSubmit: (oTransaction) => {
                this.getOwnerComponent().getTransactionsManager().insertTransaction(oTransaction);
            }
        });
    };

    ControllerProto.onTransactionPress = function(oEvent) {
        var oBindingContext = oEvent.getParameter("listItem").getBindingContext("Database"),
            oTransaction = oBindingContext.getObject(),
            sPath = oBindingContext.getPath();
            
        this.getOwnerComponent().openDialog("AddTransactionDialog", {
            title: "addTransactionDialogTitleEditMode",
            submitButton: true,
            transaction: oTransaction,
            fnOnSubmit: function(oTransaction) {
                this.getOwnerComponent().getTransactionsManager().updateTransaction(sPath, oTransaction);
            }.bind(this)
        });
    }

    ControllerProto.onSearch = function(oEvent) {
        var sQuery = oEvent.getParameter("newValue");
        this.m_oViewModel.setProperty("/searchQuery", sQuery);
        this.updateListFilters();
    }

    ControllerProto.onTabChanged = function(oEvent) {
        var oItem = oEvent.getParameter("item"),
            oTime = oItem.data("time");         
        this.updateListFilters(oTime);
        this.m_oViewModel.setProperty("/currentTab", oTime);
    }

    /**
     * Updates the list binding filters (i.e. month & search filters)
     * @param {object} oCurrentTab - optionaly the current tab
     * @private 
     */
    ControllerProto.updateListFilters = function(oCurrentTab) {
        var aFilter = [],   
            oList = this.byId("idTable"),
            oBinding = oList.getBinding("items"),
            sSearchQuery = this.m_oViewModel.getProperty("/searchQuery"),
            oTab = oCurrentTab || this.m_oViewModel.getProperty("/currentTab");

        // Search filter
        if (sSearchQuery) {
            aFilter.push(new Filter("title", FilterOperator.Contains, sSearchQuery));
        }

        // tab filter
        if (oTab) {
            aFilter.push(new Filter({
                path: "occurredOn",
                test: function(sDate) {
                    var oDate = new Date(sDate);
                    return oDate.getFullYear() == oTab.year &&
                    (!oTab.hasOwnProperty("month") || oDate.getMonth() == oTab.month);
                }.bind(this)
            }));
        }

        oBinding.filter(aFilter);
    };


    /**
     * Creates the tabs based on the existing transactions
     * @public
     */
    ControllerProto.updateTabs = function() {
        var oComponent = this.getOwnerComponent(),
            oTime = oComponent.getTransactionsManager().getAllMonths(),
            oResourceBundle = oComponent.getResourceBundle(),
            aYears = Object.keys(oTime),
            aTabs = [],
            oLastMonthTab = null,
            oCurrentMonthTab = null,
            oCurrentDate = new Date();

        // if we do not have any tabs yet, create one for the current month
        if (aYears.length < 1) {
            var iMonth = oCurrentDate.getMonth(),
                iYear = oCurrentDate.getFullYear();
            oTime[iYear] = {};
            oTime[iYear][iMonth] = {
                year: iYear,
                monthIndex: iMonth,
                text: oResourceBundle.getText("monthWithIndex_" + iMonth),
                isCurrent: true
            };

            aYears = Object.keys(oTime);
        }
        
        // construct tabs
        aYears.forEach(function(sYear) {
            var oYear = oTime[sYear],
                aMonths = Object.keys(oYear);
            
            aTabs.push({
                text: sYear,
                isYear: true,
                isCurrent: false,
                isCurrentString: false.toString(),
                isYearString: true.toString(),
                key: { year: sYear, }
            });

            aMonths.forEach(function(sMonth) {
                var oTab = oYear[sMonth];
                oTab.isYear = false;
                oTab.isCurrent = sYear == oCurrentDate.getFullYear() && sMonth == oCurrentDate.getMonth();
                oTab.isCurrentString = oTab.isCurrent.toString();
                oTab.isYearString = false.toString(),
                oTab.key = {
                    year: sYear,
                    month: sMonth
                };

                aTabs.push(oTab);
                oLastMonthTab = oTab;

                // Check for current month
                if (oTab.isCurrent) {
                    oCurrentMonthTab = oTab;
                }
            }.bind(this));

        }.bind(this));

        this.m_oViewModel.setProperty("/months", aTabs);

        // set initial tab, if not already set
        if (!this.m_oViewModel.getProperty("/currentTab")) {
            var oTab = !!oCurrentMonthTab ? oCurrentMonthTab.key : oLastMonthTab.key;
            this.updateListFilters(oTab);
            this.m_oViewModel.setProperty("/currentTab", oTab);
        }
    }


    /**
     * Sortes descending by date
     * @public
     */
    ControllerProto.sortByDate = function(oDateA, oDateB) {
        var iDateA = oDateA,
            iDateB = oDateB;
        if (typeof oDateA === "string") {
            iDateA = new Date(oDateA).getTime();
        }

        if (typeof oDateB !== "number") {
            iDateB = new Date(oDateB).getTime();
        }

        return iDateB - iDateA;
    };

    // ----------------------------------
    // Formatters
    // ----------------------------------

    /**
     * Formats the page subtitle
     * @param {array} aTransactions
     * @returns {string} 
     * @public
     */
    ControllerProto.formatPageSubtitle = function() {
        var oTable = this.byId("idTable"),
            aItems = oTable.getItems(),
            iTransactionCount = aItems.length,
            iTransactionVolume = 0,
            sTransactionVolume = "",
            oComponent = this.getOwnerComponent();

        aItems.forEach((oItem) => {
            iTransactionVolume += oItem.getBindingContext("Database").getObject().amount;;
        });

        sTransactionVolume = Formatter.formatCurrency(iTransactionVolume, Config.DEFAULT_CURRENCY);
        return oComponent.getResourceBundle().getText(
            iTransactionCount < 2 ? "overviewPageSubtitle" : "overviewPageSubtitlePlural",
            [iTransactionCount, sTransactionVolume]
        );
    }

    ControllerProto.formatCurrentTab = function() {
        var oTab = this.m_oViewModel.getProperty("/currentTab"),
            oResourceBundle = this.getOwnerComponent().getResourceBundle(),
            oDate = new Date();

        if (!oTab) {
            return "";
        }

        if (!oTab.hasOwnProperty("month")) {
            if (oTab.year == oDate.getFullYear()) {
                return oResourceBundle.getText("thisYear");
            }

            return oTab.year;
        }

        if (oTab.month == oDate.getMonth() && oTab.year == oDate.getFullYear()) {
            return oResourceBundle.getText("thisMonth");
        }        
        return oResourceBundle.getText("monthWithIndex_" + oTab.month) + " " + oTab.year; 
    }

    return Controller;
});