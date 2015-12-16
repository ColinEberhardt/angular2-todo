import {bootstrap} from 'angular2/platform/browser';
import {TodoStore} from './store/todoStore';
import ToDoList from './todolist/todolist';

bootstrap(ToDoList, [TodoStore]);
