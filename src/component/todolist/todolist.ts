import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoStore} from './../../store/todoStore';

const store = new TodoStore();

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export default class ToDoList {
  newItem = 'test';
  items = store.items;

  addItem() {
    console.log('Add item', this.newItem);
  }
}
