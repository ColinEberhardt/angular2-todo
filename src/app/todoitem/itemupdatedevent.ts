interface ItemUpdatedEvent {
  itemId: string;
  text?: string;
  completed?: boolean;
}

export default ItemUpdatedEvent;
