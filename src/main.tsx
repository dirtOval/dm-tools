import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import TableManager from './components/TableManager';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TableManager />
  </React.StrictMode>,
)

//SCAFFOLDING STUFF BELOW HERE

// // Remove Preload scripts loading
// postMessage({ payload: 'removeLoading' }, '*')

// // Use contextBridge
// window.ipcRenderer.on('main-process-message', (_event, message) => {
//   console.log(message)
// })
