
var electron = require('electron');
var app = electron.app;//require('app');
var fs = require('fs');

const remote = electron.remote;
//const BrowserWindow = electron.BrowserWindow
var BrowserWindow = electron.BrowserWindow;//require('browser-window');
// var globalShortcut = require('global-shortcut');
// var ipc = require("electron").ipcMain;
// var storage = require('electron-json-storage');
// Report crashes to our server.

//require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is GCed.
var mainWindow = null;

//Shows the debug stuff on default
require('electron-debug')({ showDevTools: true });

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {

    app.getPath('userData');
    // Create the browser window.
    mainWindow = new BrowserWindow({ width: 1200, height: 1000,frame: false });
    // and load the index.html of the app.
    //mainWindow.loadURL('file://' + __dirname + '/indexElectron.html');
    //mainWindow.loadURL('file://' + __dirname + '/indexTypescript.html');
     mainWindow.loadURL(`file://${__dirname}/../index.html`);

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

