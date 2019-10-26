let broadcaster: {
    send: (channel: string, args?: any) => void;
};

try {
    // @ts-ignore
    const electron = window.require('electron');
    broadcaster = electron.ipcRenderer;
} catch (e) {
    console.log('Failed to load electron. Mocking ipcRenderer.');
    broadcaster = {
        send(channel, args) {
            console.log(channel, args);
        }
    };
}

export default broadcaster;
