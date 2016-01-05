import {Component} from 'angular2/core';
import {TodoStore, TodoItem as TodoModelItem} from './../store/todostore';
import TodoItem from '../todoitem/todoitem';
import ItemUpdatedEvent from '../todoitem/itemupdatedevent';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  directives: [TodoItem]
})
export default class TodoList {
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
    this.store.removeItem(item.uuid);
  }

  itemUpdated(event: ItemUpdatedEvent) {
    if (event.text !== undefined) {
      if (event.text === '') {
        this.store.removeItem(event.itemId);
      } else {
        this.store.updateText(event.itemId, event.text);
      }
    }
    if (event.completed !== undefined) {
      this.store.updatedCompletion(event.itemId, event.completed);
    }
  }

}
