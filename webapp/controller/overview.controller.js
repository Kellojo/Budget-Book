sap.ui.define([
    "com/budgetBook/controller/ControllerBase",
    "com/budgetBook/Config",
    "com/budgetBook/manager/Formatter",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/FilterType",
    "sap/m/MessageBox",
    "sap/ui/Device"
], function (ControllerBase, Config, Formatter, Filter, FilterOperator, JSONModel, FilterType, MessageBox, Device) {
    "use strict";

    var Controller = ControllerBase.extend("com.budgetBook.controller.overview", {}),
        ControllerProto = Controller.prototype;

    ControllerProto.ROUTE_NAME = "overview";

    
    ControllerProto.onInit = function() {
        ControllerBase.prototype.onInit.apply(this, arguments);
        var oComponent = this.getOwnerComponent();

        this.m_oViewModel = new JSONModel({
            months: [],
            currentTab: null,
            searchQuery: "",
            synchronizeableTransactionsCount: 0,
            currentTransactionTab: oComponent.getResourceBundle().getText("overviewPageTitleYourTransactions"),
        });
        this.getView().setModel(this.m_oViewModel);

        oComponent.getDatabase().attachUpdate(this.updateTabs.bind(this));
        oComponent.getTransactionsManager().attachSynchronizeTransactionsChanged((oEvent) => {
            this.m_oViewModel.setProperty("/synchronizeableTransactionsCount", oEvent.getParameter("count"));
        }, this);
    }

    ControllerProto.onPageEnter = function() {
        this.getOwnerComponent().getAppManager()
            .setShowBackButton(false)
            .setShowAppHeader(true)
            .setShowSaveButton(false)
            .setShowMenuButton(this.getOwnerComponent().getIsWebVersion())
            .setShowAddButton(true)
            .setAppTitle("");
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

    ControllerProto.onAddPlannedButtonPress = function() {
        this.getOwnerComponent().openDialog("PlanTransactionDialog", {
            title: "planTransactionDialogTitle",
            submitButton: true,
        });
    }

    ControllerProto.onSynchronizeTransactionButtonPress = function(oEvent) {
        this.getOwnerComponent().openDialog("SyncWithAppDialog", {
            title: "addTransactionDialogTitle",
            placement: "Bottom",
            contentHeight: "450px",
            contentWidth: "300px",
            showHeader: false
        }, oEvent.getSource());
    }

    ControllerProto.onTransactionPress = function(oEvent) {
        var oBindingContext = oEvent.getParameter("listItem").getBindingContext("Database"),
            oTransaction = oBindingContext.getObject(),
            sPath = oBindingContext.getPath();
        
        if (Device.system.phone) {
            this.getOwnerComponent().toTransaction(oTransaction);
        } else {
            this.getOwnerComponent().openDialog("AddTransactionDialog", {
                title: "addTransactionDialogTitleEditMode",
                submitButton: true,
                transaction: oTransaction,
                fnOnSubmit: function (oTransaction) {
                    this.getOwnerComponent().getTransactionsManager().updateTransaction(sPath, oTransaction);
                }.bind(this)
            });
        }
    }

    ControllerProto.onDeleteTransactionPress = async function(oEvent) {
        var oBindingContext = oEvent.getSource().getBindingContext("Database"),
            oTransaction = oBindingContext.getObject();

        try {
            await this._showDeleteTransactionWarning();
        } catch (error) {
            return;
        }
        
        this.getOwnerComponent().getTransactionsManager().deleteTransaction(oTransaction);
    }
    ControllerProto.onDeletePlannedTransactionPress = async function(oEvent) {
        var oBindingContext = oEvent.getSource().getBindingContext("Database"),
            oTransaction = oBindingContext.getObject();

        try {
            await this._showDeleteTransactionWarning();
        } catch (error) {
            return;
        }
        
        this.getOwnerComponent().getTransactionsManager().deletePlannedTransaction(oTransaction);
    }
    /**
     * Shows the delete transaction warning
     * @returns {Promise}
     * @private
     */
    ControllerProto._showDeleteTransactionWarning = async function() {

        return new Promise((resolve, reject) => {
            var oComponent = this.getOwnerComponent(),
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
                        resolve();
                        return;
                    }
                    reject();
                }.bind(this)
            });
        });
    }

    /**
     * Triggered by the searhc, when the search term changes.
     * Also called internally, to filter the list, when acategory in the chart is pressed
     * @param {sap.ui.core.Event || string} oEvent
     * @public
     */
    ControllerProto.onSearch = function(oEvent) {
        if (typeof oEvent === "string") {
            var sQuery = oEvent;
            
        } else {
            var sQuery = oEvent.getParameter("newValue");
        }

        this.m_oViewModel.setProperty("/searchQuery", sQuery);
        this.updateListFilters();
    }

    ControllerProto.onTabChanged = function(oEvent) {
        var oItem = oEvent.getParameter("item"),
            oTime = oItem.data("time");         
        this.updateListFilters(oTime);
        this.m_oViewModel.setProperty("/currentTab", oTime);
    }

    ControllerProto.onCategoryColumnPress = function(oEvent) {
        var sCategory = oEvent.getParameter("category");
        this.onSearch(sCategory);
    }

    ControllerProto.onIsCompletedChanged = function(oEvent) {
        var oTransaction = oEvent.getSource().getBindingContext("Database").getObject();
        if (this.getOwnerComponent().getIsWebVersion()) {
            oTransaction.isCompleted = oEvent.getParameter("selected");
            this.getOwnerComponent().getTransactionsManager().updateTransaction(oTransaction.id, oTransaction);
        }
    };

    ControllerProto.onTransactionTabChanged = function(oEvent) {
        var sText = oEvent.getSource().getText();
        this.m_oViewModel.setProperty("/currentTransactionTab", sText);
    };

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

        // manually update page subtitle
        this.byId("idPage").setSubTitle(this.formatPageSubtitle());
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
                if (oTransaction.type == Config.TRANSACTION_TYPE_EXPENSE) {
                    iTransactionVolume -= oTransaction.amount;
                } else {
                    iTransactionVolume += oTransaction.amount;
                }
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
     * Formats the sync transactions from app menu action text
     * @param {number} iNumberOfTransactions
     * @public
     */
    ControllerProto.formatSynchronizeFromAppActionText = function(iNumberOfTransactions) {
        var oResourceBundle = this.getOwnerComponent().getResourceBundle();
        if (iNumberOfTransactions > 0) {
            return oResourceBundle.getText("synchronizeTransactionsWithNumber", [iNumberOfTransactions]);
        }

        return oResourceBundle.getText("synchronizeTransactions");
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
        oPrevDate.setDate(0);
        oPrevDate.setFullYear(oCurrentTab.year);

        if (bIsYear) {
            oPrevDate.setFullYear(oPrevDate.getFullYear() - 1)
            iPrevTransactionVolume = oTransactionsManager.getTransactionVolumeIn(oPrevDate.getFullYear());
        } else {
            oPrevDate.setMonth(oCurrentTab.month - 1);
            iPrevTransactionVolume = oTransactionsManager.getTransactionVolumeIn(
                oPrevDate.getFullYear(),
                oPrevDate.getMonth()
            );
        }

        if (iPrevTransactionVolume != 0) {
            aYAxisAnnotations.push({
                y: iPrevTransactionVolume,
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    color: '#fff',
                    background: '#00E396',
                  },
                  text: bIsYear ? 
                    oResourceBundle.getText("chartPreviousYear", [oPrevDate.getFullYear()]) : 
                    oResourceBundle.getText("chartPreviousMonth", [oResourceBundle.getText("monthWithIndex_" + oPrevDate.getMonth())]),
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
            oCurrentDate.setFullYear(sYear, sMonth, i);

            var isPastCurrentDay = oCurrentDate.getTime() > new Date().getTime(),
                oPoint = {
                    x: oCurrentDate.getTime(),
                    y: null
                };


            if (!isPastCurrentDay) {
                var aTransactionsOnDate = oComponent.getTransactionsManager().getAllTransactionsOnDate(oCurrentDate);

                // Get transaction volume
                aTransactionsOnDate.forEach((oTransaction) => { 
                    if (oTransaction.type === Config.TRANSACTION_TYPE_EXPENSE) {
                        iTransactionVolume -= oTransaction.amount;
                    } else {
                        iTransactionVolume += oTransaction.amount;
                    }                
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

    /**
     * Creates the data points for the category chart for a given month
     * @returns {number} iStartTransactionVolume
     * @public
     */
    ControllerProto.formatCategoryChartData = function() {
        var oCurrentTab = this.m_oViewModel.getProperty("/currentTab"),
            oComponent = this.getOwnerComponent(),
            oTransactionsManager = oComponent.getTransactionsManager(),
            oResourceBundle = oComponent.getResourceBundle(),
            oSeries = { 
                name: oResourceBundle.getText("chartTransactionVolume"),
                data: []
            };

        if (!oCurrentTab) {
            return;
        }
        

        var oResult = oTransactionsManager.getTransactionVolumeForAllCategoriesIn(oCurrentTab.year, oCurrentTab.month, true),
            aCategories = Object.keys(oResult);
        aCategories.forEach((sCategory) => {
            oSeries.data.push(oResult[sCategory]);
        });

        
        return {
            series: [oSeries],
            xaxis: {
                categories: aCategories
            }
        }
    }

    return Controller;
});