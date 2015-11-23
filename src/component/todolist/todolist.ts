import {Component} from 'angular2/angular2';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css']
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
