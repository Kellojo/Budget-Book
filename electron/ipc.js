const {app, ipcMain, shell} = require('electron');
const Store = require("electron-store");
const IOManager = require("./IoManager");


module.exports.startIPC = function(mainWindow) {
    const store = new Store();
    const ioManager = new IOManager();
    ipcMain.on("saveData", (event, oData) => {
        console.log("Writing " + oData);
        store.set("Database", oData);
    });
    ipcMain.on("loadData", (event) => {
        var oData = store.get("Database");
        if (!oData) {
            oData = {};
        }

        event.reply("loadDataComplete", oData);
    });
    ipcMain.on("exportData", (event, oParam) => {
        ioManager.saveJSONToDisk({
            title: oParam.title,
            fileName: oParam.fileName,
            saveLabel: oParam.saveLabel,
            success: () => { event.reply("exportDataComplete") },
            error: () => { event.reply("exportDataError") },
            fileContent: oParam.data
        }, mainWindow);
    });
    ipcMain.on("importData", (event, oParam) => {
        ioManager.loadJSONFromDisk({
            title: oParam.title,
            buttonLabel: oParam.buttonLabel,
            success: (oData) => { event.reply("importDataComplete", oData) },
            error: (sErrorMessage, sErrorDetail) => { event.reply("importDataError", sErrorMessage, sErrorDetail) }
        }, mainWindow);
    });

    ipcMain.on("loadAppInfo", (event) => {
        
        var oAppInfo = {
            version: app.getVersion(),
            isFirstStartUp: !!store.get("isFirstStartUp", true)
        };

        store.set("isFirstStartUp", false);

        event.reply("loadAppInfoComplete", oAppInfo);
    });
    ipcMain.on("openHelpPage", (event) => {
        shell.openExternal("https://kellojo.github.io/Budget-Book/");
    });
}