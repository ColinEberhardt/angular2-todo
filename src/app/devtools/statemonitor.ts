import 'redux';

class StateLogItem {
    action: any;
    state: any;
    uuid: string;
}

export default class StateMonitor {
    stateLog: StateLogItem[] = [];

    reducer(adaptee: Redux.Reducer): Redux.Reducer {
        return (state: any, action: any) => {
            if (action.type === 'ROLLBACK') {
                const index = this.stateLog.findIndex((i: StateLogItem) => i.uuid === action.logItem.uuid);
                state = this.stateLog[index].state;
                this.stateLog = this.stateLog.slice(0, index + 1);
            }
            return adaptee(state, action);
        };
    }

    middleware(): Redux.Middleware {
        return (store: Redux.Store) =>
            (next: any) => (action: any) => {
                let result = next(action);
                if (action.type !== 'ROLLBACK') {
                    this.stateLog.push({
                        action,
                        state: store.getState(),
                        uuid: uuid.v4()
                    });
                }
                return result;
            };
    }
}
