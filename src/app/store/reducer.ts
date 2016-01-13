import { List } from 'immutable';
import { TodoItem } from './todoitem';

export interface ITodoAction {
  type: string;
  text?: string;
  itemId?: string;
  completed?: boolean;
}

export function reducer(state: List<TodoItem> = List<TodoItem>(), action: ITodoAction) {

  function indexOf(uuid: string) {
    return state.findIndex((i: TodoItem) => i.uuid === action.itemId);
  }

  switch (action.type) {
    case 'ADD':
      return state.push(new TodoItem().setText(action.text));
    case 'REMOVE':
      return List<TodoItem>(state.filter((i: TodoItem) => i.uuid !== action.itemId));
    case 'UPDATE_ITEM_TEXT':
      return state.update(indexOf(action.itemId), (i: TodoItem) => i.setText(action.text));
    case 'UPDATE_ITEM_COMPLETION':
      return state.update(indexOf(action.itemId), (i: TodoItem) => i.setCompleted(action.completed));
    default:
      return state;
  }
}
