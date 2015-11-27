export default class TodoItem {
  _text: String;

  get text() {
    console.log(`getting value for text "${this._text}"`);
    return this._text;
  }
  set text(value) {
    this._text = value;
  }

  constructor(text: String) {
    this._text = text;
  }
}
