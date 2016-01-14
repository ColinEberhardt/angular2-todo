import { Injectable } from 'angular2/core';
import { List } from 'immutable';
import { TodoItem } from './todoitem';
import { createStore, applyMiddleware } from 'redux';
import { reducer, ITodoAction } from './reducer';
import StateMonitor from '../devtools/statemonitor';

@Injectable()
export default class TodoStore {
  store: Redux.Store;

  constructor(monitor: StateMonitor) {
    const storedItemsString = <string> localStorage.getItem('todolist') || '[]';
    const storedItems = <Array<any>> JSON.parse(storedItemsString);
    const items = List<TodoItem>(storedItems.map(i => new TodoItem(i._data)));

    const creator = applyMiddleware(monitor.middleware())(createStore);
    this.store = creator(monitor.reducer(reducer), items);

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
