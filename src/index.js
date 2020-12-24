// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, shell} = require('electron');
const path = require('path');
const windowStateKeeper = require('electron-window-state');
const { autoUpdater } = require("electron-updater");

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
  mainWindow.loadFile('src/webapp/index-electron.html');

  require("./electron/menuBar");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

app.allowRendererProcessReuse = true;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

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
require("./electron/ipc");