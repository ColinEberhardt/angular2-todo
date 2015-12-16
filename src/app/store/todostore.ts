export class TodoItem {
  text: String;
}

export class TodoStore {
  items: TodoItem[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: String) {
    this.items.push({
      text: newItem
    });
  }
}
