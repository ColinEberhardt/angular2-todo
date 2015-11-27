import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/angular2';
import {default as TodoItemModel} from '../../store/todoItem';

@Component({
  selector: 'todo-item',
  templateUrl: 'component/todoitem/todoitem.html',
  styleUrls: ['component/todoitem/todoitem.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TodoItem {
  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }

}
