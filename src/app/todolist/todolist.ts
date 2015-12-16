import {Component} from 'angular2/core';

@Component({
  selector: 'todo-list',
  templateUrl: 'app/todolist/todolist.html',
  styleUrls: ['app/todolist/todolist.css']
})
export default class ToDoList {
  newItem = 'test';

  addClicked() {
    console.log('Add clicked', this.newItem);
  }

  newItemChanged(event: KeyboardEvent): void {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    this.newItem = target.value;
  }
}
