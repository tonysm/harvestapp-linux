module.exports = function ({ onAddTimer, onShow, onClose }) {
    return [
        {
            label: 'Start/Stop last timer',
            type: 'radio',
            click: () => {
                onAddTimer();
            },
        },
        {
            label: 'Show App',
            type: 'radio',
            click: () => {
                onShow();
            },
        },
        {
            label: 'Quit',
            type: 'radio',
            click: () => {
                onClose();
            },
        },
    ];
};
