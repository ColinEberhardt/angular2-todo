import {bootstrap} from 'angular2/platform/browser';
import TodoStore from './store/todostore';
import TodoList from './todolist/todolist';
import StateMonitor from './devtools/statemonitor';

bootstrap(TodoList, [StateMonitor, TodoStore]);
