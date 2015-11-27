import { createStore } from 'redux';
import TodoItem from './todoItem';

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

export default class TodoStore {
  store = createStore(reducer);

  get items(): TodoItem[] {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
