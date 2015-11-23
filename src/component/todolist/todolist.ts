import {Component, ViewEncapsulation} from 'angular2/angular2';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css'],
  encapsulation: ViewEncapsulation.Native
})
export default class ToDoList {
  greeting: String = 'Hello World';
}
