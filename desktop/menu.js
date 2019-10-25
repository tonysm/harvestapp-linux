module.exports = function ({ onAddTimer, onShow, onClose }) {
    return [
        {
            label: 'Add timer',
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
