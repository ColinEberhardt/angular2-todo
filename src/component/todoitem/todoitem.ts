import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {TodoItem as ToDoItemModel} from './../../store/todoStore';

@Component({
  selector: 'todo-item',
  templateUrl: 'component/todoitem/todoitem.html',
  styleUrls: ['component/todoitem/todoitem.css']
})
export default class TodoItem {
  @Input()
  item: ToDoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }

}
