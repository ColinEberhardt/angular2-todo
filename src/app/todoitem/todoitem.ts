import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../store/todoStore';
import ItemUpdatedEvent from './itemupdatedevent';

@Component({
  selector: 'todo-item',
  templateUrl: 'app/todoitem/todoitem.html',
  styleUrls: ['app/todoitem/todoitem.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TodoItem {
  editMode = false;

  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter<TodoItemModel>();

  @Output()
  itemUpdated = new EventEmitter<ItemUpdatedEvent>();

  @Output()
  toggleCompletion = new EventEmitter<TodoItemModel>();

  doneClicked() {
    this.done.emit(this.item);
  }

  toggle() {
    this.toggleCompletion.emit(this.item);
  }

  enterEditMode(element: HTMLInputElement) {
    this.editMode = true;
    if (this.editMode) {
      setTimeout(() => { element.focus(); }, 0);
    }
  }

  cancelEdit(element: HTMLInputElement) {
    this.editMode = false;
    element.value = this.item.text;
  }

  commitEdit(updatedText: string) {
    this.editMode = false;
    this.itemUpdated.emit({
      item: this.item,
      updatedText: updatedText
    });
  }
}
