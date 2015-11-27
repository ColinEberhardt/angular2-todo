import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/angular2';
import TodoStore from '../../store/todoStore';
import {default as TodoItemModel} from '../../store/todoItem';
import TodoItem from '../todoitem/todoitem';

@Component({
  selector: 'todo-list',
  templateUrl: 'component/todolist/todolist.html',
  styleUrls: ['component/todolist/todolist.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, TodoItem]
})
export default class TodoList {
  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    if (this.newItem !== '') {
      this.store.dispatch({
        type: 'ADD',
        text: this.newItem
      });
      this.newItem = '';
    }
  }

  removeItem(item: TodoItemModel) {
    this.store.dispatch({
      type: 'REMOVE',
      index: this.store.items.indexOf(item)
    });
  }
}
