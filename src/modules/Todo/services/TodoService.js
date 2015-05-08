function TodoService($localStorage){

	function getTodoList() {
		return angular.isDefined($localStorage.todo) ? $localStorage.todo : {};
	}

	function saveTodoList(list) {
		$localStorage.todo = angular.isDefined(list) ? list : {};
	}

	return {
		getTodoList: getTodoList,
		saveTodoList: saveTodoList
	};
}

angular.module('RedmineBoard').factory('TodoService', [
	'$localStorage',
	TodoService
]);
