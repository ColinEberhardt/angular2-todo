export class TodoItem {
  _text: String;

  get text() {
    console.log('getting value for text', this._text);
    return this._text;
  }
  set text(value) {
    this._text = value;
  }

  constructor(text: String) {
    this._text = text;
  }

}

export class TodoStore {
  items: TodoItem[];

  constructor() {
    const storedItemsString = <string> localStorage.getItem('todolist');
    if (storedItemsString) {
      const storedItems = <Array<any>> JSON.parse(storedItemsString);
      this.items = storedItems.map(i => new TodoItem(i._text));
    } else {
      this.items = [];
    }
  }

  addItem(newItem: String) {
    this.items.push(new TodoItem(newItem));
    localStorage.setItem('todolist', JSON.stringify(this.items));
  }

  removeItem(item: TodoItem) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
