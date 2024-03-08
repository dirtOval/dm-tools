import {
  app,
  BrowserWindow,
  BrowserWindowConstructorOptions as WindowOptions 
} from 'electron';

import { createFileRoute, createURLRoute } from 'electron-router-dom';
import path from 'path';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (id: string, options: WindowOptions = {}) => {
  const window = new BrowserWindow({
    width: 1280,
    height: 720,
    ...options
  });

  const devServerURL = createURLRoute('http://localhost:5173', id);
  console.log(`dev server URL: ${devServerURL}`);
  
  const fileRoute = createFileRoute('./renderer.ts', id);

  process.env.NODE_ENV === 'development'
    ? window.loadURL(devServerURL)
    : window.loadFile(...fileRoute);

  return window;
};

app.whenReady().then(() => {
  const main = createWindow('main', {
    webPreferences: {
      // preload: './preload.ts',
    }
  })
  const second = createWindow('second', {
    width: 450,
    height: 350,
    show: false
  })
  console.log(`Main window id: ${main.id}`);
  console.log(`Second window id: ${second.id}`);

});

//The boilerplate electron forge createWindow function, as messed up by me
//previously. :)

// const createWindows = () => {
//   // Create the browser window.
//   const tableManager = new BrowserWindow({
//     width: 1280,
//     height: 720,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   });

//   const travelManager = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js'),
//     },
//   });

  // and load the index.html of the app.
  // if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
  //   tableManager.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  //   travelManager.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);

  // } else {
  //   tableManager.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  //   travelManager.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));

  // }

//   // Open the DevTools.
//   tableManager.webContents.openDevTools();
// };

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// });

// app.on('activate', () => {
//   // On OS X it's common to re-create a window in the app when the
//   // dock icon is clicked and there are no other windows open.
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindow();
//   }
// });

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
