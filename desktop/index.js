const { app, BrowserWindow, Menu, Tray } = require('electron');

const settings = require('electron-settings');
const path = require('path');

const APP_NAME = app.name;
const APP_VERSION = app.getVersion();
const ICONS_PATH = path.join(app.getAppPath(), 'assets');

const TRAY_ICON_ON = "tray-icon-on";
const TRAY_ICON_OFF = "tray-icon-off";
const APP_ICON = "logo";

const menuItems = require('./menu');

let win,
    tray,
    shouldClose = false;


let url;

if (process.env.NODE_ENV === 'dev') {
    url = 'http://localhost:8080/';
} else {
    url = `file://${process.cwd()}/dist/index.html`;
}

const HarvestAppLinux = {
    createWindow() {
        win = new BrowserWindow({
            width: settings.get('width', 800),
            height: settings.get('height', 600),
            autoHideMenuBar: true,
            icon: ICONS_PATH + `/${APP_ICON}.png`,
        });
        win.loadURL(url);

        tray = this._buildTray(win);

        // Hijack the close event to hide by default.
        win.on('close', (e) => {
            if (!shouldClose) {
                e.returnValue = false;
                e.preventDefault();

                win.hide();
            }
        });
    },

    _buildTray(win) {
        tray = new Tray(ICONS_PATH+`/${TRAY_ICON_OFF}.png`);

        const contextMenu = Menu.buildFromTemplate(menuItems({
            onAddTimer: () => {
                win.show();
            },
            onShow: () => {
                win.show();
            },
            onClose: () => {
                shouldClose = true;
                win.close();
            },
        }));

        tray.setToolTip(`${APP_NAME} version ${APP_VERSION}`);
        tray.setContextMenu(contextMenu);

        return tray;
    }
};

app.on('ready', () => {
    HarvestAppLinux.createWindow();
});
