// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
let child_process = require("child_process");
let { contextBridge } = require("electron");

let getDirname = () => {
  // return __dirname
};

contextBridge.exposeInMainWorld(
  "api", { getDirname }
);