angular.module('RedmineBoard').controller('UsersController', [
	'$http',
	function ($http) {
		var Users = this;

		function getUsers () {
			//Users In Dev Group
			$http.get('/api/users?groupId=7').success(function (data) {
				Users.list = Users.list.concat(data.users);
			}).error(function(){
				Users.errorMessage = 'Unable to Load Issues';
			});
			//Users In Dev Manager Group
			$http.get('/api/users?groupId=16').success(function (data) {
				Users.list = Users.list.concat(data.users);
			}).error(function(){
				Users.errorMessage = 'Unable to Load Issues';
			});
		}
		Users.list = [];

		getUsers();

	}
]);
