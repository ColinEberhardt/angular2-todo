import {bootstrap} from 'angular2/platform/browser';
import {TodoStore} from './store/todoStore';
import TodoList from './todolist/todolist';

bootstrap(TodoList, [TodoStore]);
