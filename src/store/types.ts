export enum Status {
    'loading',
    'ready',
}

export declare interface Client {
    id: number;
    name: string;
}

export declare interface Project {
    id: number;
    name: string;
}

export declare interface Task {
    id: number;
    name: string;
}

export declare interface Timer {
    id: number;
    notes: string;
    is_running: boolean;
    project: Project;
    client: Client;
    task: Task;
}

export declare interface Account {
    id: number;
    name: string;
}

export declare interface User {
    id: number;
    name: string;
    accounts: Account[];
}

export declare interface StoreData {
    clients: Client[];
    projects: Project[];
    timers: {
        status: Status;
        items: Timer[];
    };
    user?: User;
}

export const mutations = {
    startTimer: 'startTimer',
    stopTimer: 'stopTimer',
    setTimers: 'setTimers',
    setTimerStatus: 'setTimerStatus',
};

export const actions = {
    toggleTimer: 'toggleTimer',
    loadTimers: 'loadTimers',
};
