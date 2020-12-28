const { menubar } = require('menubar');
const { BrowserWindow } = require('electron');
const path = require('path');
const config = require("./config.js");

const mb = menubar({
    icon: config.TRAY_ICON,
    index: `file://${process.cwd()}/${config.INDEX_HTML_TRAY}`,
    browserWindow: {
        width: 400,
        height: 475,
        resizable: false,
        webPreferences: {
            contextIsolation: true,     // protect against prototype pollution
            enableRemoteModule: false,  // turn off remote
            preload: path.resolve(__dirname, 'preload.js')  // use a preload script
        }
    }
});

mb.on('ready', () => {

});
mb.on('after-create-window', () => {
    // Open the DevTools.
    if (config.IS_DEVELOPMENT) {
        mb.window.openDevTools();
    }
});