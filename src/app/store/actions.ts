import { ITodoAction } from './reducer';

export function addItem(text: string): ITodoAction {
  return {
    type: 'ADD',
    text
  };
}

export function removeItem(itemId: string): ITodoAction {
  return {
    type: 'REMOVE',
    itemId
  };
}

export function updateItemText(itemId: string, text: string): ITodoAction {
  return {
    type: 'UPDATE_ITEM_TEXT',
    itemId,
    text
  };
}

export function updateItemCompletion(itemId: string, completed: boolean): ITodoAction {
  return {
    type: 'UPDATE_ITEM_COMPLETION',
    itemId,
    completed
  };
}
