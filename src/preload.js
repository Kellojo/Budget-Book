const {
    contextBridge,
    ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
    "api", {
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
        loadAppInfo: (fnCallback) => {
            ipcRenderer.once("loadAppInfoComplete", fnCallback);
            ipcRenderer.send("loadAppInfo");
        }
    }
);