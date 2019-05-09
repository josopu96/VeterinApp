"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) { return val === '--serve'; });
function createWindow() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    var anchoVentana = 1280;
    var altoVentana = 720;
    if (serve) {
        anchoVentana = anchoVentana;
    }
    var margenHorizontal = (size.width - anchoVentana) / 2;
    var margenVertical = (size.height - altoVentana) / 2;
    // Create the browser window.
    win = new electron_1.BrowserWindow({
        x: margenHorizontal,
        y: margenVertical,
        width: 1280,
        minHeight: 749,
        height: 749,
        webPreferences: {
            nodeIntegration: true,
        },
        resizable: false,
    });
    var express = require('express');
    var bodyParser = require('body-parser');
    var server = express();
    var usuario = require('./src/server/routes/usuario.route');
    var cliente = require('./src/server/routes/cliente.route');
    var globalModel = require('./src/server/routes/global.route');
    var mascota = require('./src/server/routes/mascota.route');
    // Set up mongoose connection
    var mongoose = require('mongoose');
    var dev_db_url = 'mongodb+srv://admin:admin@frankfurtcluster-kdmjy.mongodb.net/VeterinApp';
    var mongoDB = process.env.MONGODB_URI || dev_db_url;
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use('/usuarios', usuario);
    server.use('/clientes', cliente);
    server.use('/global', globalModel);
    server.use('/mascotas', mascota);
    var port = 9018;
    server.listen(port, function () {
        console.log('Server is up and running on port numner ' + port);
    });
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron")
        });
        win.loadURL('http://localhost:4200');
    }
    else {
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'dist/index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    win.setMenu(null);
    if (true) {
        win.webContents.openDevTools();
    }
    win.setSize(anchoVentana, altoVentana + 29);
    // Emitted when the window is closed.
    win.on('closed', function () {
        // Dereference the window object, usually you would store window
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}
try {
    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    electron_1.app.on('ready', createWindow);
    // Quit when all windows are closed.
    electron_1.app.on('window-all-closed', function () {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (win === null) {
            createWindow();
        }
    });
}
catch (e) {
    // Catch Error
    // throw e;
}
//# sourceMappingURL=main.js.map