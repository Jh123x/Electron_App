const { app, BrowserWindow } = require('electron')
const path = require('path')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')
}

// Close app when all windows are closed
app.on('window-all-closed', () => {
    app.quit()
})

// Spawn new window if there are no windows currently
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) { createWindow() }

    })
})