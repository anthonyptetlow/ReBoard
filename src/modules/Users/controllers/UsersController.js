angular.module('RedmineBoard').controller('UsersController', [
	'UserService',
	function (UserService) {
		var Users = this;

		Users.list = [];

		UserService.getDevUsers().then(function (data) {
			data.forEach(function (userData) {
				Users.list = Users.list.concat(userData.users);
			});
		});

	}
]);
