const {app, BrowserWindow, ipcRenderer} = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    win.loadURL("http://localhost:3000");
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if (process.platform != "darwin"){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length == 0){
        createWindow()
    }
})