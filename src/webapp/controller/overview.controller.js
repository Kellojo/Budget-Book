sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "com/budgetBook/Config",
    "com/budgetBook/manager/Formatter",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterType",
    "sap/m/MessageBox",
], function (ControllerBase, Config, Formatter, Filter, FilterOperator, JSONModel, FilterType, MessageBox) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.overview", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "overview";
    ControllerProto.CHART_TYPE_OVER_TIME = "overTime";
    ControllerProto.CHART_TYPE_BY_CATEGORY = "byCategory";

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);

        this.m_oViewModel = new JSONModel({
            months: [],
            currentTab: null,
            searchQuery: "",
            currentChartType: this.CHART_TYPE_OVER_TIME
        });
        this.getView().setModel(this.m_oViewModel);

        this.getOwnerComponent().getDatabase().attachUpdate(this.updateTabs.bind(this));
    }

    ControllerProto.onPageEnter = function() {
        this.getOwnerComponent().getAppManager().setShowAppHeader(true);
        this.updateTabs();
    }

    ControllerProto.onAddButtonPress = function() {
        this.getOwnerComponent().openDialog("AddTransactionDialog", {
            title: "addTransactionDialogTitle",
            submitButton: true,
            fnOnSubmit: (oTransaction) => {
                this.getOwnerComponent().getTransactionsManager().insertTransaction(oTransaction);
            }
        });
    }

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

    ControllerProto.onDeleteTransactionPress = function(oEvent) {
        var oBindingContext = oEvent.getSource().getBindingContext("Database"),
            oTransaction = oBindingContext.getObject(),
            oComponent = this.getOwnerComponent(),
            oResourceBundle = oComponent.getResourceBundle(),
            sDeleteAction = oResourceBundle.getText("dialogDelete");

        MessageBox.warning(oResourceBundle.getText("deleteTransactionWarning"), {
            emphasizedAction: sDeleteAction,
            actions: [
                oResourceBundle.getText("dialogCancel"),
                sDeleteAction
            ],
            onClose: function(sAction) {
                if (sAction === sDeleteAction) {
                    oComponent.getTransactionsManager().deleteTransaction(oTransaction);
                }
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
        var oSearchFilter = null,  
            oTabFilter = null,
            oList = this.byId("idTable"),
            oBinding = oList.getBinding("items"),
            sSearchQuery = this.m_oViewModel.getProperty("/searchQuery"),
            oTab = oCurrentTab || this.m_oViewModel.getProperty("/currentTab");

        // Search filter
        var aSearchFilter = [];
        aSearchFilter.push(new Filter({
            path: "title",
            operator: FilterOperator.Contains,
            value1: sSearchQuery
        }));
        aSearchFilter.push(new Filter({
            path: "category",
            operator: FilterOperator.Contains,
            value1: sSearchQuery
        }));

        oSearchFilter = new Filter(aSearchFilter, false);

        // tab filter
        oTabFilter = new Filter({
            path: "occurredOn",
            test: function(sDate) {
                var oDate = new Date(sDate);
                return oDate.getFullYear() == oTab.year &&
                (!oTab.hasOwnProperty("month") || oDate.getMonth() == oTab.month);
            }.bind(this)
        });

        oBinding.filter(new Filter([oTabFilter, oSearchFilter], true), FilterType.Application);
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
            var oTransaction = oItem.getBindingContext("Database").getObject();

            // can be undefined, in case of a deleted transaction
            if (!!oTransaction) {
                iTransactionVolume += oItem.getBindingContext("Database").getObject().amount;
            }
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

    /**
     * formats the APexcharts chart data for the current timespan (i.e. month/year)
     */
    ControllerProto.formatMonthChartData = function(aTransactions) {
        var oCurrentTab = this.m_oViewModel.getProperty("/currentTab"),
            oComponent = this.getOwnerComponent(),
            oTransactionsManager = oComponent.getTransactionsManager(),
            oResourceBundle = oComponent.getResourceBundle(),
            aYAxisAnnotations = [];

        if (!oCurrentTab) {
            return;
        }

        // Create Data Points
        var oSeries = {
            name: oResourceBundle.getText("chartTransactionVolume"),
            data: []
        };

        // Create data points for the current month or a full year
        var iTransactionVolume = 0,
            bIsYear = !!oCurrentTab.year && !oCurrentTab.month;
        if (!bIsYear) {
            oSeries.data = this._createDataPointsForMonth(
                oCurrentTab.year,
                oCurrentTab.month,
                iTransactionVolume
            ).dataPoints;
        } else if (bIsYear) {
            for (var i = 0; i < 12; i++) {
                var oMonthInfo = this._createDataPointsForMonth(oCurrentTab.year, i, iTransactionVolume);
                iTransactionVolume = oMonthInfo.transactionVolume;
                oSeries.data = oSeries.data.concat(oMonthInfo.dataPoints);
            }
        }

        // Calculate previous month/year transaction volume
        var iPrevTransactionVolume = 0,
            oPrevDate = new Date();
        oPrevDate.setFullYear(oCurrentTab.year);

        if (bIsYear) {
            iPrevTransactionVolume = oTransactionsManager.getTransactionVolumeIn(oPrevDate.getFullYear() - 1);
        } else {
            oPrevDate.setMonth(oCurrentTab.month);
            oPrevDate.setMonth(oPrevDate.getMonth() - 1);
            iPrevTransactionVolume = oTransactionsManager.getTransactionVolumeIn(
                oPrevDate.getFullYear(),
                oPrevDate.getMonth()
            );
        }

        if (iPrevTransactionVolume > 0) {
            aYAxisAnnotations.push({
                y: iPrevTransactionVolume,
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    color: '#fff',
                    background: '#00E396',
                  },
                  text: bIsYear ? oResourceBundle.getText("chartPreviousYear") : oResourceBundle.getText("chartPreviousMonth"),
                }
            });
        }
        

        return {
            series: [oSeries],
            annotations: {
                yaxis: aYAxisAnnotations,
                xaxis: [],
            }
        };
    }

    /**
     * Creates the data points for the given month
     * @param {string} sYear
     * @param {string} sMonth
     * @param {number} iStartTransactionVolume
     * @returns {object}
     * @private
     */
    ControllerProto._createDataPointsForMonth = function(sYear, sMonth, iStartTransactionVolume) {
        var iDaysInCurrentMonth =  new Date(sYear, sMonth, 0).getDate(),
            iTransactionVolume = iStartTransactionVolume,
            aDataPoints = [],
            oComponent = this.getOwnerComponent();

        for (var i = 1; i <= iDaysInCurrentMonth; i++) {
            var oCurrentDate = new Date();
            oCurrentDate.setFullYear(sYear);
            oCurrentDate.setMonth(sMonth);
            oCurrentDate.setDate(i);

            var isPastCurrentDay = oCurrentDate.getTime() > new Date().getTime(),
                oPoint = {
                    x: oCurrentDate.getTime(),
                    y: null
                };


            if (!isPastCurrentDay) {
                var aTransactionsOnDate = oComponent.getTransactionsManager().getAllTransactionsOnDate(oCurrentDate);

                // Get transaction volume
                aTransactionsOnDate.forEach((oTransaction) => {
                    iTransactionVolume += oTransaction.amount;
                });
                iTransactionVolume = Math.floor(iTransactionVolume * 100) / 100;
                oPoint.y = iTransactionVolume;
            }

            aDataPoints.push(oPoint);
        }

        return {
            dataPoints: aDataPoints,
            transactionVolume: iTransactionVolume
        };
    }

    return Controller;
});