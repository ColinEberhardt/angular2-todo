import {Component, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css'],
  directives: [FORM_DIRECTIVES]
})
export default class ToDoList {
  newItem = 'test';

  addItem() {
    console.log('Add item', this.newItem);
  }
}
