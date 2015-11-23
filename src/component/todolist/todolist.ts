import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoStore} from './../../store/todoStore';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export default class ToDoList {
  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    console.log('Add item', this.newItem);
  }
}
