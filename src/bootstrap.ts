import {bootstrap} from 'angular2/angular2';
import ToDoList from './component/todolist/todolist';
import {TodoStore} from './store/todoStore';

bootstrap(ToDoList, [TodoStore]);
