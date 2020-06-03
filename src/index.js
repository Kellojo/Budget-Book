// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, shell} = require('electron')
const path = require('path')
const Store = require("electron-store")
const windowStateKeeper = require('electron-window-state')
const { autoUpdater } = require("electron-updater")
const IOManager = require("./electron/IoManager")

let mainWindow = null;


function createWindow () {
    // Load the previous state with fallback to defaults
    let mainWindowState = windowStateKeeper({
        defaultWidth: 1000,
        defaultHeight: 800
    });


    // Create the browser window.
    mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,

    webPreferences: {
        contextIsolation: true,     // protect against prototype pollution
        enableRemoteModule: false,  // turn off remote
        preload: path.resolve(__dirname, 'preload.js')  // use a preload script
    }
  });

  mainWindowState.manage(mainWindow);
  autoUpdater.checkForUpdatesAndNotify();

  // and load the index.html of the app.
  mainWindow.loadFile('src/webapp/index.html');

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

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