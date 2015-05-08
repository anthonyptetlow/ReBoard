angular.module('RedmineBoard').controller('TodoController', [
	'TodoList',
	'TodoService',
	function (TodoList,TodoService) {
		var Todo = this;
		Todo.list = [];
		
		Todo.storeChanges = function () {
			TodoService.saveTodoList(Todo.list);
		};

		Todo.addItem = function (){
			if(angular.isDefined(Todo.newTitle) && Todo.newTitle.length > 0){	
				Todo.list.push({title: Todo.newTitle, checked: false});
				Todo.newTitle = '';
				Todo.storeChanges();
			}
		};
	}
]);
