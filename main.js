const electron = require('electron')
const { app, BrowserWindow } = electron

const path = require('path')
const url = require('url')




const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const usuario = require('./routes/usuario.route'); // Imports routes for the products

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://admin:admin@frankfurtcluster-kdmjy.mongodb.net/VeterinApp';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/usuarios', usuario);

let port = 9018;
server.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});







let win

function createWindow() {
    win = new BrowserWindow({ width: 1366, height: 768})
    // win.maximize()
    win.webContents.openDevTools()
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/components/index/index.html'),
        protocol: 'file',
        slashes: true
    }))
}

exports.openWindow = () => {
    let newWin = new BrowserWindow({ width: 400, height: 200 })
    newWin.loadURL(url.format({
        pathname: path.join(__dirname, '/components/enupal/enupal.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)