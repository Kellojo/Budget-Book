const {
    contextBridge,
    ipcRenderer
} = require("electron");
const Store = require("./Store");

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
        }
    }
);