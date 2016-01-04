System.register(['angular2/platform/browser', './store/todoStore', './todolist/todolist'], function(exports_1) {
    var browser_1, todoStore_1, todolist_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (todoStore_1_1) {
                todoStore_1 = todoStore_1_1;
            },
            function (todolist_1_1) {
                todolist_1 = todolist_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(todolist_1.default, [todoStore_1.TodoStore]);
        }
    }
});

//# sourceMappingURL=../maps/app/bootstrap.js.map
