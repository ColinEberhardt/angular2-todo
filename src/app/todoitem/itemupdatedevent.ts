import {TodoItem} from './../store/todoStore';

interface ItemUpdatedEvent {
  item: TodoItem;
  updatedText: string;
}

export default ItemUpdatedEvent;
