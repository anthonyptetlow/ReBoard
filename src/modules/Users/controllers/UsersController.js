angular.module('RedmineBoard').controller('UsersController', [
	'UserService',
	'StateService',
	'UserList',
	function (UserService, StateService, UserList) {
		var Users = this;
		Users.list = UserList;

		function refreshUserData(cb) {
			UserService.getDevUsers().then(function (userList) {
				Users.list = userList;
				cb();
			});
		}

		StateService.setReloadDataFunction(refreshUserData);
	}
]);
