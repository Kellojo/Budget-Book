const { menubar } = require('menubar');
const { BrowserWindow } = require('electron');
const path = require('path');


const mb = menubar({
    icon: "./webapp/img/icon.png",
    index: `file://${process.cwd()}/webapp/index.html?env=tray`,
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
    //mb.window.openDevTools();
});