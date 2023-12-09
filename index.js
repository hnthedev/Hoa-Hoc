const { ipcRenderer, BrowserWindow } = require('electron');
const ipc = ipcRenderer;

closeBtn.addEventListener('click', () => {
    ipc.send('closeApp');
})
document.getElementById('backBtn').addEventListener('click', () => {
    console.log("TET");
    window.location = '../index.html';
})
