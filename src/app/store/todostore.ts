import { List, Map } from 'immutable';

export class TodoItem {
  _data: Map<string, any>;

  get text() {
    return <string> this._data.get('text');
  }

  setText(value: string) {
    return new TodoItem(this._data.set('text', value));
  }

  constructor(data = {}) {
    this._data = Map<string, any>(data);
  }
}

export class TodoStore {
  items = List<TodoItem>();

  constructor() {
    const storedItemsString = <string> localStorage.getItem('todolist') || '[]';
    const storedItems = <Array<any>> JSON.parse(storedItemsString);
    this.items = List<TodoItem>(storedItems.map(i => new TodoItem(i._data)));
  }

  addItem(newItem: string) {
    const item = new TodoItem().setText(newItem);
    this.items = this.items.push(item);
    this.persistChanges();
  }

  updateItem(item: TodoItem, updatedText: string) {
    const index = this.items.indexOf(item);
    const newItem = item.setText(updatedText);
    this.items = this.items.set(index, newItem);
    this.persistChanges();
  }

  removeItem(item: TodoItem) {
    this.items = List<TodoItem>(this.items.filter(i => i !== item));
    this.persistChanges();
  }

  persistChanges() {
    localStorage.setItem('todolist', JSON.stringify(this.items.toJS()));
  }
}
