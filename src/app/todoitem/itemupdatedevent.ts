import {TodoItem} from './../store/todoStore';

interface ItemUpdatedEvent {
  item: TodoItem;
  text?: string;
  completed?: boolean;
}

export default ItemUpdatedEvent;
