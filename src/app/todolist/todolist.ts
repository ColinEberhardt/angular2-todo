import {Component} from 'angular2/core';
import {TodoStore, TodoItem as TodoModelItem} from './../store/todoStore';
import TodoItem from '../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  directives: [TodoItem]
})
export default class ToDoList {
  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    this.store.addItem(this.newItem);
    this.newItem = '';
  }

  removeItem(item: TodoModelItem) {
    this.store.removeItem(item);
  }

}
