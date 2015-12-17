import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../store/todoStore';
import ItemUpdatedEvent from './itemupdatedevent';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css']
})
export default class TodoItem {
  editMode = false;

  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter<TodoItemModel>();

  @Output()
  itemUpdated = new EventEmitter<ItemUpdatedEvent>();

  doneClicked() {
    this.done.emit(this.item);
  }

  enterEditMode() {
    this.editMode = true;
  }

  commitEdit(updatedText: string) {
    this.editMode = false;
    this.itemUpdated.emit({
      item: this.item,
      updatedText: updatedText
    });
  }
}
