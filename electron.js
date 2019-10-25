const { app, BrowserWindow, Menu, Tray } = require('electron')

let url

if (process.env.NODE_ENV === 'dev') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

let indicator,
    shouldClose = false

app.on('ready', () => {
    let window = new BrowserWindow({width: 800, height: 600, icon: __dirname+'/src/assets/logo.png'})
    window.loadURL(url)
    indicator = new Tray(__dirname+'/src/assets/logo.png')

    const contextMenu = Menu.buildFromTemplate([
        { label: 'Start last timer', type: 'radio' },
        { label: 'Open App', type: 'radio', click: () => {
            window.show();
        } },
        { label: 'Quit', type: 'radio', click: () => {
            shouldClose = true;
            window.close();
        } },
    ])

    indicator.setToolTip('This is my application.')
    indicator.setContextMenu(contextMenu)

    window.on('close', (e) => {
        if (!shouldClose) {
            e.preventDefault();
            e.returnValue = false;

            window.hide();
        }
    });
})
