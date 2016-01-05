import {TodoItem} from './../store/todostore';

interface ItemUpdatedEvent {
  item: TodoItem;
  text?: string;
  completed?: boolean;
}

export default ItemUpdatedEvent;
