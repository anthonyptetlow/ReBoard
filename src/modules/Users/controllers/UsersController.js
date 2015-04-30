angular.module('RedmineBoard').controller('UsersController', [
	'UserService',
	function (UserService) {
		var Users = this;

		Users.list = [];

		UserService.getUsers(7).then(function (data) {
			Users.list = Users.list.concat(data.users);
		});

		UserService.getUsers(16).then(function (data) {
			Users.list = Users.list.concat(data.users);
		});

	}
]);
