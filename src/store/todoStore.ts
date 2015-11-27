import { createStore } from 'redux';

export class TodoItem {
  _text: String;

  get text() {
    console.log(`getting value for text "${this._text}"`);
    return this._text;
  }
  set text(value) {
    this._text = value;
  }

  constructor(text: String) {
    this._text = text;
  }
}

export class Action {
  mutateState(state: TodoItem[]): TodoItem[] {
    throw new Error('I am abstract!');
  }
}

interface ITodoAction {
  type: string;
  text?: string;
  index?: number;
}

function reducer(state: TodoItem[] = [], action: ITodoAction) {
  let newState: TodoItem[];
  switch (action.type) {
    case 'ADD':
      newState = state.slice();
      newState.push(new TodoItem(action.text));
      return newState;
    case 'REMOVE':
      newState = state.slice();
      newState.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
}

export class TodoStore {
  store = createStore(reducer);

  get items(): TodoItem[] {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
