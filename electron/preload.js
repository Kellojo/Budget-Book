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
            ipcRenderer.once("exportDataComplete", oParam.success);
            if (oParam.error) {
                ipcRenderer.once("exportDataError", oParam.error);
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
        loadAppInfo: (fnCallback) => {
            ipcRenderer.once("loadAppInfoComplete", fnCallback);
            ipcRenderer.send("loadAppInfo");
        },
        openHelpPage: () => {
            ipcRenderer.send("openHelpPage");
        }
    }
);