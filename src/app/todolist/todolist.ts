import {Component} from 'angular2/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css']
})
export default class ToDoList {
  newItem = 'test';

  addItem() {
    console.log('Add item', this.newItem);
  }
}
