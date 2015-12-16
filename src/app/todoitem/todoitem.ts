import {Component, Input} from 'angular2/core';
import {TodoItem as ToDoItemModel} from './../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
})
export default class TodoItem {
  @Input()
  item: ToDoItemModel;
}
