import { createStore } from 'redux';
import TodoItem from './todoItem';
import { List } from 'immutable';

interface ITodoAction {
  type: string;
  text?: string;
  index?: number;
}

function reducer(state: List<TodoItem> = List<TodoItem>(), action: ITodoAction) {
  switch (action.type) {
    case 'ADD':
      return state.push(new TodoItem(action.text));
    case 'REMOVE':
      return state.splice(action.index, 1);
    default:
      return state;
  }
}

export default class TodoStore {
  store = createStore(reducer);

  get items(): List<TodoItem>[] {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
