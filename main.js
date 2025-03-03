const electron = require('electron')
const { app, BrowserWindow } = electron

const path = require('path')
const url = require('url')

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