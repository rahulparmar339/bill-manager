// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)
require('./main-process/authenticate.js')

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    mainWindow = new BrowserWindow({width: 800, height: 600})

    mainWindow.webContents.openDevTools()
    
    //for webpack only
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
    
    //for webpack-dev-server
    //mainWindow.loadURL(`http://localhost:8080/app/index.html`)

})


