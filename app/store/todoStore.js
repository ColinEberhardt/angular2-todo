System.register([], function(exports_1) {
    var TodoItem, TodoStore;
    return {
        setters:[],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(text) {
                    this._text = text;
                }
                Object.defineProperty(TodoItem.prototype, "text", {
                    get: function () {
                        console.log('getting value for text', this._text);
                        return this._text;
                    },
                    set: function (value) {
                        this._text = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
            TodoStore = (function () {
                function TodoStore() {
                    this.items = [];
                }
                TodoStore.prototype.addItem = function (newItem) {
                    this.items.push(new TodoItem(newItem));
                };
                TodoStore.prototype.removeItem = function (item) {
                    var index = this.items.indexOf(item);
                    this.items.splice(index, 1);
                };
                return TodoStore;
            })();
            exports_1("TodoStore", TodoStore);
        }
    }
});

//# sourceMappingURL=../../maps/app/store/todostore.js.map
