import { List } from 'immutable';
import { TodoItem } from './todoitem';
import { createStore } from 'redux';
import { reducer, ITodoAction } from './reducer';

export default class TodoStore {
  store = createStore(reducer);

  get items(): List<TodoItem>[] {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
