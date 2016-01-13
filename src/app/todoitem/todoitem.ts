import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItem as TodoItemModel} from './../store/todoitem';
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
  done = new EventEmitter<string>();

  @Output()
  itemUpdated = new EventEmitter<ItemUpdatedEvent>();

  doneClicked() {
    this.done.emit(this.item.uuid);
  }

  toggle() {
    this.itemUpdated.emit({
      itemId: this.item.uuid,
      completed: !this.item.completed
    });
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
      itemId: this.item.uuid,
      text: updatedText
    });
  }
}
