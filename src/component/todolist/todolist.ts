import {Component} from 'angular2/angular2';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css']
})
export default class ToDoList {
  newItem = 'test';
}
