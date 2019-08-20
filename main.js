// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  MenuItem
} = require('electron')
const {
  join
} = require('path');

const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
const menu = new Menu()
newMenuItem("Force Reload", "CmdOrCtrl+R", "forcereload");
newMenuItem("Toggle Dev Tools", "CmdOrCtrl+D", "toggledevtools");
/**
 * Backup directory
 */
let isDev = true;
const backupPath = isDev ? join(`${__dirname}`, 'backups') : join(`${app.getPath('documents')}`, 'CSbackups');

function newMenuItem(label, accelerator, role) {
  menu.append(new MenuItem({
    label,
    accelerator,
    role
  }))
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 470,
    width: 600,
    minHeight: 470,
    frame: false,
    height: 460,
    center: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./public/index.html');
  // mainWindow.loadURL('http://localhost:5000')
  // set Menu
  mainWindow.setMenu(menu);
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


//Windows Bar Buttons action
ipcMain.on('win:actionBar', (e, msg) => {
  if (msg === 'clo') {
    mainWindow.close();
    app.quit();
  } else if (msg === 'min') {
    mainWindow.minimize();
  } else if (msg === 'max') {
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
  } else if (msg === 'full') {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  }
})


//App Backup
ipcMain.on('config:backup', (e, msg) => {
  // dialog.showMessageBox(null, {message: msg});
  if (!fs.existsSync(backupPath)) {
    fs.mkdirSync(backupPath);
  }
  const d = new Date();
  const formatD = `Data = ${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}, Horas = ${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
  const fileName = `backup-${formatD}, ${d.getTime()}.json`;

  console.log(fileName);
  fs.createWriteStream(join(backupPath, fileName), 'utf8').write(msg, (err) => {
    if (err) {
      e.returnValue = false;
    } else {
      e.returnValue = true;
    }
  });
})


// restore backup
ipcMain.on('config:restore', (e, fileName) => {
  const rd = fs.readFileSync(join(backupPath, fileName), 'utf8');
  e.returnValue = rd;
})

//restore backup
ipcMain.on('config:get-backups', (e) => {
  if (!fs.existsSync(backupPath)) {
    e.returnValue = [];
    return;
  }
  const backups = fs.readdirSync(backupPath);
  e.returnValue = backups;
})