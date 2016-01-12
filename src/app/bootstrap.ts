import {bootstrap} from 'angular2/platform/browser';
import TodoStore from './store/todostore';
import TodoList from './todolist/todolist';

bootstrap(TodoList, [TodoStore]);
