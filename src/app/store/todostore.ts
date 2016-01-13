import { List } from 'immutable';
import { TodoItem } from './todoitem';
import { createStore } from 'redux';
import { reducer, ITodoAction } from './reducer';

export default class TodoStore {
  store: Redux.Store;

  constructor() {
    const storedItemsString = <string> localStorage.getItem('todolist') || '[]';
    const storedItems = <Array<any>> JSON.parse(storedItemsString);
    const items = List<TodoItem>(storedItems.map(i => new TodoItem(i._data)));
    this.store = createStore(reducer, items);

    this.store.subscribe(() => {
      localStorage.setItem('todolist', JSON.stringify(this.items.toJS()));
    });
  }


  get items(): List<TodoItem> {
    return this.store.getState();
  }

  dispatch(action: ITodoAction) {
    this.store.dispatch(action);
  }
}
