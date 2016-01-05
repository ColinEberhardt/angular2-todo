System.register(['immutable'], function(exports_1) {
    var immutable_1;
    var TodoItem, TodoStore;
    return {
        setters:[
            function (immutable_1_1) {
                immutable_1 = immutable_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(data) {
                    if (data === void 0) { data = undefined; }
                    data = data || { text: '', completed: false, uuid: uuid.v4() };
                    this._data = immutable_1.Map(data);
                }
                Object.defineProperty(TodoItem.prototype, "uuid", {
                    get: function () {
                        return this._data.get('uuid');
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(TodoItem.prototype, "text", {
                    get: function () {
                        return this._data.get('text');
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.setText = function (value) {
                    return new TodoItem(this._data.set('text', value));
                };
                Object.defineProperty(TodoItem.prototype, "completed", {
                    get: function () {
                        return this._data.get('completed');
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoItem.prototype.setCompleted = function (value) {
                    return new TodoItem(this._data.set('completed', value));
                };
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
            TodoStore = (function () {
                function TodoStore() {
                    this.items = immutable_1.List();
                    var storedItemsString = localStorage.getItem('todolist') || '[]';
                    var storedItems = JSON.parse(storedItemsString);
                    this.items = immutable_1.List(storedItems.map(function (i) { return new TodoItem(i._data); }));
                }
                TodoStore.prototype.addItem = function (newItem) {
                    var item = new TodoItem().setText(newItem);
                    this.items = this.items.push(item);
                    this.persistChanges();
                };
                TodoStore.prototype.updateText = function (itemId, updatedText) {
                    var index = this.items.findIndex(function (i) { return i.uuid === itemId; });
                    var item = this.items.get(index);
                    var newItem = item.setText(updatedText);
                    this.items = this.items.set(index, newItem);
                    this.persistChanges();
                };
                TodoStore.prototype.updatedCompletion = function (itemId, completed) {
                    var index = this.items.findIndex(function (i) { return i.uuid === itemId; });
                    var item = this.items.get(index);
                    var newItem = item.setCompleted(completed);
                    this.items = this.items.set(index, newItem);
                    this.persistChanges();
                };
                TodoStore.prototype.removeItem = function (itemId) {
                    this.items = immutable_1.List(this.items.filter(function (i) { return i.uuid !== itemId; }));
                    this.persistChanges();
                };
                TodoStore.prototype.persistChanges = function () {
                    localStorage.setItem('todolist', JSON.stringify(this.items.toJS()));
                };
                return TodoStore;
            })();
            exports_1("TodoStore", TodoStore);
        }
    }
});

//# sourceMappingURL=../../maps/app/store/todostore.js.map
