import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css'],
  encapsulation: ViewEncapsulation.Native
})
export default class ToDoList {
}
