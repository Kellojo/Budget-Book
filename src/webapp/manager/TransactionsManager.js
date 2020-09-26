sap.ui.define([
    "kellojo/m/beans/BeanBase",
    "sap/base/Log",
    "com/budgetBook/Config",
], function (ManagedObject, Log, Config) {
    "use strict";

    var oManager = ManagedObject.extend("com.budgetBook.manager.TransactionsManager", {
        metadata: {
            events: {
                synchronizeTransactionsChanged: {
                    parameters: {
                        transactions: {
                            type: "object[]"
                        },
                        count: {
                            type: "int"
                        }
                    }
                }
            }
        }
    }),
        ManagerProto = oManager.prototype;
    
    ManagerProto.onInit = function() {
        this.getOwnerComponent().getFirebaseManager().attachUserSignedIn(this._onUserSignedIn, this);

    };

    /**
     * Starts listening for change events in the synchronizeable transactions collection
     * @param {sap.ui.base.Event} oEvent 
     */
    ManagerProto._onUserSignedIn = function(oEvent) {
        this.listenForSynchronizeableTransactions((aTransactions) => {
            this.fireSynchronizeTransactionsChanged({
                transactions: aTransactions,
                count: aTransactions.length
            });
        });
    }

    /**
     * Get's a transaction by id (currently only working in the web version)
     * @param {string} sTransactionId 
     * @returns {object}
     */
    ManagerProto.loadTransaction = async function(sTransactionId) {
        assert(this.getOwnerComponent().getIsWebVersion(), "loadTransaction currently only works in the web version");
        if (!this.getOwnerComponent().getFirebaseManager().getIsLoggedIn()) {
            return;
        }

        var oTransaction = await this._getSynchronizeableTransactionFirebaseCollection().doc(sTransactionId).get();
        return oTransaction.data();
    }

    ManagerProto.insertTransaction = async function(oTransaction) {
        assert(!!oTransaction, "Transaction not defined");
        assert(!!oTransaction.title, "Transaction doesn't have a title");
        assert(!!oTransaction.occurredOn, "Transaction doesn't have a date");
        assert(!!oTransaction.amount, "Transaction doesn't have an amount");

        var oComponent = this.getOwnerComponent();

        if (oComponent.getIsWebVersion()) {
            // insert into firestore
            assert(this.getOwnerComponent().getFirebaseManager().getIsLoggedIn(), "User must be signed in");
            await this._getSynchronizeableTransactionFirebaseCollection().add(oTransaction); 
        } else {
            var oDatabase = oComponent.getDatabase(),
                aOldCategories = this.getAllCategories(),
                oData = oDatabase.getData();

            if (!oData.transactions) {
                oData.transactions = [];
            }

            oTransaction.title = oTransaction.title.trim();
            oTransaction.category = oTransaction.category.trim();

            oData.transactions.push(oTransaction);
            oDatabase.refresh();

            // check for new category, which needs to be synced to the firestore
            if (aOldCategories.length != this.getAllCategories().length) {
                this.uploadCategories();
            }
        }
    };

    /**
     * Updates an existing transaction
     * @param {string} sPath either the model path for non web version or the ID (firebase)
     * @param {object} oTransaction
     * @public
     */
    ManagerProto.updateTransaction = async function(sPath, oTransaction) {
        assert(typeof sPath === "string", "Path/ID for transaction not defined");
        assert(!!oTransaction, "Transaction not defined");

        if (this.getOwnerComponent().getIsWebVersion()) {
            // insert into firestore
            assert(this.getOwnerComponent().getFirebaseManager().getIsLoggedIn(), "User must be signed in");
            await this._getSynchronizeableTransactionFirebaseCollection().doc(sPath).set(oTransaction); 
        } else {
            var oDatabase = this.getOwnerComponent().getDatabase();
            oDatabase.setModelProperty(sPath, oTransaction);
        }
    };

    /**
     * Deletes the transaction at the given path
     * @param {object} oTransaction - the tansaction to delete
     */
    ManagerProto.deleteTransaction = async function(oTransaction) {
        assert(!!oTransaction, "Transaction not defined");

        if (this.getOwnerComponent().getIsWebVersion()) {
            await this._getSynchronizeableTransactionFirebaseCollection().doc(oTransaction).delete();
        } else {
            var oDatabase = this.getOwnerComponent().getDatabase(),
            aTransactions = oDatabase.getData().transactions,
            iIndex = aTransactions.indexOf(oTransaction);

            assert(iIndex >= 0, "The transaction to delete could not be found in the database");    
            aTransactions.splice(iIndex, 1);

            oDatabase.refresh();
        }
    }

    /**
     * Get all distincs categories
     * @returns {string}
     * @public
     */
    ManagerProto.getAllCategories = function() {
        var oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aCategories = [];

        if (!oData.transactions) {
            return aCategories;
        }

        oData.transactions.forEach((oTransaction) => {
            var sCategory = oTransaction.category;

            if (!aCategories.includes(sCategory) &&
                sCategory != undefined &&
                sCategory != null)  {
                aCategories.push(sCategory);
            }
        });

        return aCategories;
    };

    /**
     * Get's all categories from the firebase db
     * @returns {string[]}
     * @public
     */
    ManagerProto.getAllCategoriesFirebase = async function() {
        var aCategories = [],
            oQuerySnapshot = await this._getCategoriesFirebaseCollection().get();

        oQuerySnapshot.forEach( (doc) => aCategories.push(doc.data().title));
        return aCategories;
    }

    /**
     * Get's all distinct years and the correpsonding months from a set of transactions
     * @param {array} aTransactions
     * @returns {object} 
     * @public
     */
    ManagerProto.getAllMonths = function() {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            oResourceBundle = this.getOwnerComponent().getResourceBundle();

        if (!aTransactions) {
            return [];
        }

        var oTime = {};

        // create our distinct time object
        aTransactions.forEach((oTransaction) => {
            var oDate = oTransaction.occurredOn;
            if (typeof oTransaction.occurredOn === "number" || typeof oTransaction.occurredOn === "string") {
                oDate = new Date(oTransaction.occurredOn);
            }
            var iYear = oDate.getFullYear(),
                iMonth = oDate.getMonth(),
                sUniqueKey = iMonth + "_" + iYear;

            if (!oTime.hasOwnProperty(iYear.toString()) || !oTime[iYear].hasOwnProperty(iMonth.toString())) {
                if (!oTime.hasOwnProperty(iYear.toString())) {
                    oTime[iYear] = {};
                }

                oTime[iYear][iMonth] = {
                    year: iYear,
                    monthIndex: iMonth,
                    text: oResourceBundle.getText("monthWithIndex_" + iMonth),
                    transactionCount: 1
                };
            } else {
                oTime[iYear][iMonth].transactionCount++;
            }
        });

        return oTime;
    }

    /**
     * Get's all transactions on a given day
     * @param {Date} oDate
     * @returns {array}
     * @public
     */
    ManagerProto.getAllTransactionsOnDate = function(oDate) {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            aResult = [];

        if (!oDate || !aTransactions) {
            return aResult;
        }


        aResult = aTransactions.filter((oTransaction) => {
            var oTransactionDate = new Date(oTransaction.occurredOn);
            return oTransactionDate.getFullYear() == oDate.getFullYear() &&
                   oTransactionDate.getMonth() == oDate.getMonth() &&
                   oTransactionDate.getDate() == oDate.getDate();
        });

        return jQuery.extend(true, [], aResult);
    }

    /**
     * Get's all transactions in the given month and or year
     * @param {string} sYear
     * @param {string} sMonth
     * @return {array}
     * @public
     */
    ManagerProto.getAllTransactionsIn = function(sYear, sMonth) {
        let oDatabase = this.getOwnerComponent().getDatabase(),
            oData = oDatabase.getData(),
            aTransactions = oData.transactions,
            aResult = [];

        if (!aTransactions) {
            return aResult;
        }

        aTransactions = jQuery.extend(true, [], oData.transactions);
        aResult = aTransactions.filter(function(oTransaction) {
            var oTransactionDate = new Date(oTransaction.occurredOn);
            return oTransactionDate.getFullYear() == sYear && 
                ((!sMonth && sMonth != 0) || oTransactionDate.getMonth() == sMonth)
        }.bind(this));

        return aResult;
    }

    /**
     * Get's the transaction volume of a given month / year / category
     * @param {string} sYear - the year to get the volume for
     * @param {string} sMonth - the optional month to filter by
     * @param {string} sCategory - the optional category to filter by
     * @returns {number}
     * @public
     */
    ManagerProto.getTransactionVolumeIn = function(sYear, sMonth, sCategory) {
        var aTransactions = this.getAllTransactionsIn(sYear, sMonth),
            iVolume = 0;

        aTransactions.forEach((oTransaction) => {
            if ((sCategory == null || sCategory == undefined) || sCategory == oTransaction.category) {
                if (oTransaction.type === Config.TRANSACTION_TYPE_EXPENSE) {
                    iVolume -= oTransaction.amount;
                } else {
                    iVolume += oTransaction.amount;
                }
            } 
        });

        return Math.floor(iVolume * 100) / 100;
    }

    /**
     * Get's the transaction volume of a given month / year for all existing categories
     * @param {string} sYear - the year to get the volume for
     * @param {string} sMonth - the optional month to filter by
     * @param {boolean} bExcludeZero - should categories with zero volume be filtered out?
     * @returns {object} - a map of categories & the corresponding transaction volume
     * @public
     */
    ManagerProto.getTransactionVolumeForAllCategoriesIn = function(sYear, sMonth, bExcludeZero) {
        var aCategories = this.getAllCategories(),
            oResult = {};

        aCategories.forEach(function(sCategory) {
            var iVolume = this.getTransactionVolumeIn(sYear, sMonth, sCategory);

            if (!bExcludeZero || iVolume != 0 ) {
                oResult[sCategory] = iVolume;
            }
        }.bind(this));

        return oResult;
    }



    ManagerProto.listenForSynchronizeableTransactions = function(fnChange) {
        this._getSynchronizeableTransactionFirebaseCollection()
        .onSnapshot(function(querySnapshot) {
            var aTransactions = [];
            querySnapshot.docs.forEach((oDoc) => aTransactions.push(oDoc));
            fnChange(aTransactions);
        }.bind(this));
    }

    /**
     * Synchronizes all transactions from the firestore
     * @public
     */
    ManagerProto.synchronizeTransactions = async function(oParams) {
        var iSuccessfullCount = 0,
            oSyncCollection = this._getSynchronizeableTransactionFirebaseCollection(),
            oQuerySnapShot = await oSyncCollection.get(),
            aTransactions = oQuerySnapShot.docs;

        for (var i = 0; i < aTransactions.length; i++) {
            var oDoc = aTransactions[i];

            var sDocId = oDoc.id,
            oTransaction = oDoc.data();
            oTransaction.occurredOn = new Date(oTransaction.occurredOn).toISOString();

            // delete document
            await oSyncCollection.doc(sDocId).delete();

            // add transaction to the localy stored ones
            this.insertTransaction(oTransaction);
            iSuccessfullCount ++;
        }

        oParams.complete({
            successfullSyncs: iSuccessfullCount
        });
    }

    /**
     * Synchronizes the categories with the firestore
     * @public
     */
    ManagerProto.uploadCategories = async function() {
        var oComponent = this.getOwnerComponent();
        if (!oComponent.getFirebaseManager().getIsLoggedIn() || oComponent.getIsWebVersion()) {
            return;
        }

        var aCategories = this.getAllCategories(),
            oSyncCollection = this._getCategoriesFirebaseCollection();

        var oQuerySnapshot = await oSyncCollection.get();
        oQuerySnapshot.forEach((oDoc) => {
            oDoc.ref.delete();
        });
        
        aCategories.forEach((sCategory) => {
            oSyncCollection.add({
                title: sCategory
            });
        });
    }


    /**
     * Get's the firebase collection, where the users transactions are located in
     * @returns {firebase.collection}
     * @private
     */
    ManagerProto._getSynchronizeableTransactionFirebaseCollection = function() {
        return this.getOwnerComponent().getFirebaseManager().getFireStore()
            .collection("transactions")
            .doc(firebase.auth().currentUser.uid)
            .collection("synchronizable");
    }

    /**
     * Get's the firebase collection, where the users categories are located in
     * @returns {firebase.collection}
     * @private
     */
    ManagerProto._getCategoriesFirebaseCollection = function() {
        return this.getOwnerComponent().getFirebaseManager().getFireStore()
            .collection("transactions")
            .doc(firebase.auth().currentUser.uid)
            .collection("categories");
    }


    return oManager;
});