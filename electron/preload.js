const {
    contextBridge,
    ipcRenderer
} = require("electron");
const { Config } = require("jsstore");
const config = require("./config.js");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
        isElectron: true,
        isDevelopment: config.IS_DEVELOPMENT,
        saveData: (oData) => {
            ipcRenderer.send("saveData", oData);
        },
        loadData: (fnCallback) => {
            ipcRenderer.once("loadDataComplete", fnCallback);
            ipcRenderer.send("loadData");
        },
        exportData: (oParam) => {
            if (oParam.success) {
                ipcRenderer.once("exportDataComplete", oParam.success);
                oParam.success = null;
            }
            if (oParam.error) {
                ipcRenderer.once("exportDataError", oParam.error);
                oParam.error = null;
            }
            
            ipcRenderer.send("exportData", oParam);
        },
        importData: (oParam) => {
            ipcRenderer.once("importDataComplete", (oEvent, oData) => {
                oParam.success(oData);
            });
            if (oParam.error) {
                ipcRenderer.once("importDataError", (oEvent, sErrorMessage, sErrorDetail) => {
                   oParam.error(sErrorMessage, sErrorDetail);
                });
            }
            
            ipcRenderer.send("importData", oParam);
        },
        purchaseSubscription: (oParam) => {
            ipcRenderer.once("purchaseSubscription-purchasing", oParam.purchasing);
            ipcRenderer.once("purchaseSubscription-purchased", oParam.purchased);
            ipcRenderer.once("purchaseSubscription-failed", oParam.failed);
            ipcRenderer.once("purchaseSubscription-restored", oParam.restored);
            ipcRenderer.once("purchaseSubscription-deferred", oParam.deferred);
            
            delete oParam.purchasing;
            delete oParam.purchased;
            delete oParam.failed;
            delete oParam.restored;
            delete oParam.deferred;

            ipcRenderer.send("purchaseSubscription", oParam);
        }, 
        loadAppInfo: (fnCallback) => {
            ipcRenderer.once("loadAppInfoComplete", fnCallback);
            ipcRenderer.send("loadAppInfo");
        },
        openHelpPage: () => {
            ipcRenderer.send("openHelpPage");
        },
        openChangeLogPage: () => {
            ipcRenderer.send("openChangeLogPage");
        }
    }
);