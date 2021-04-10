const { inAppPurchase } = require("electron");
const Config = require("./config");

class InAppPurchases {
    Products;
    MainWindow;

    constructor(mainWindow) {
        inAppPurchase.on("transactions-updated", this.onTransactionsUpdated);
        this.MainWindow = mainWindow;
    }

    onTransactionsUpdated = (oEvent, aTransactions) => {
        if (!Array.isArray(aTransactions)) {
            return;
        }

        aTransactions.forEach(this.processTransaction);
    }

    /**
     * Processes a single transaction
     * @param {} oTransaction
     */
    processTransaction = (oTransaction) => {
        const payment = oTransaction.payment;

        switch (oTransaction.transactionState) {
            case "purchasing":
                console.log(`Purchasing ${payment.productIdentifier}...`);
                this.MainWindow.webContents.send('purchaseSubscription-purchasing', {
                    productIdentifier: payment.productIdentifier,
                });
                break;

            case "purchased": {
                const receiptURL = inAppPurchase.getReceiptURL();
                console.log(`Receipt URL: ${receiptURL}`);
                console.log(`${payment.productIdentifier} purchased.`);

                this.MainWindow.webContents.send('purchaseSubscription-purchased', {
                    productIdentifier: payment.productIdentifier,
                });

                // Submit the receipt file to the server and check if it is valid.
                // @see https://developer.apple.com/library/content/releasenotes/General/ValidateAppStoreReceipt/Chapters/ValidateRemotely.html
                // ...
                // If the receipt is valid, the product is purchased
                // ...

                // Finish the transaction.
                inAppPurchase.finishTransactionByDate(oTransaction.transactionDate);

                break;
            }

            case "failed":
                console.log(`Failed to purchase ${payment.productIdentifier}.`);
                this.MainWindow.webContents.send('purchaseSubscription-failed', {
                    productIdentifier: payment.productIdentifier,
                });

                // Finish the transaction.
                inAppPurchase.finishTransactionByDate(oTransaction.transactionDate);

                break;
            case "restored":
                console.log(`The purchase of ${payment.productIdentifier} has been restored.`);
                this.MainWindow.webContents.send('purchaseSubscription-restored', {
                    productIdentifier: payment.productIdentifier,
                });

                break;
            case "deferred":
                console.log(`The purchase of ${payment.productIdentifier} has been deferred.`);
                this.MainWindow.webContents.send('purchaseSubscription-deferred', {
                    productIdentifier: payment.productIdentifier,
                });

                break;
        }
    }

    /**
     * Get's the produts
     * @returns {ElectronProduct[]}
     * @public
     */
    async getProducts() {
        this.Products = await inAppPurchase.getProducts(Config.IN_APP_PURCHASE_IDS);

        console.log(this.Products[0]);

        return {
            monthly: this.Products[0],
        };
    }

    canMakePayments() {
        return inAppPurchase.canMakePayments();
    }

    purchaseSubscription(oParam) {
        inAppPurchase.purchaseProduct(oParam.subscription.productIdentifier, 1);
    }
}

module.exports = InAppPurchases;
