import {Component} from 'angular2/core';
import {TodoStore} from './../store/todoStore';

const store = new TodoStore();

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css']
})
export default class ToDoList {
  newItem = 'test';
  items = store.items;

  addItem() {
    console.log('Add item', this.newItem);
  }
}
