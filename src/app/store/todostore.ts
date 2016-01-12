import { List } from 'immutable';
import { TodoItem } from './todoitem';
import { createStore } from 'redux';

interface ITodoAction {
  type: string;
  text?: string;
  index?: number;
}

function reducer(state: List<TodoItem> = List<TodoItem>(), action: ITodoAction) {
  'use strict';
  switch (action.type) {
    case 'ADD':
      return state.push(new TodoItem().setText(action.text));
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

  /*constructor() {
    const storedItemsString = <string> localStorage.getItem('todolist') || '[]';
    const storedItems = <Array<any>> JSON.parse(storedItemsString);
    this.items = List<TodoItem>(storedItems.map(i => new TodoItem(i._data)));
  }

  addItem(newItem: string) {
    const item = new TodoItem().setText(newItem);
    this.items = this.items.push(item);
    this.persistChanges();
  }

  updateText(itemId: string, updatedText: string) {
    const index = this.items.findIndex((i: TodoItem) => i.uuid === itemId);
    const item = this.items.get(index);
    const newItem = item.setText(updatedText);
    this.items = this.items.set(index, newItem);
    this.persistChanges();
  }

  updatedCompletion(itemId: string, completed: boolean) {
    const index = this.items.findIndex((i: TodoItem) => i.uuid === itemId);
    const item = this.items.get(index);
    const newItem = item.setCompleted(completed);
    this.items = this.items.set(index, newItem);
    this.persistChanges();
  }

  removeItem(itemId: string) {
    this.items = List<TodoItem>(this.items.filter((i: TodoItem) => i.uuid !== itemId));
    this.persistChanges();
  }

  persistChanges() {
    localStorage.setItem('todolist', JSON.stringify(this.items.toJS()));
  }*/
}
