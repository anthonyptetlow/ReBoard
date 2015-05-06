function UserService($http, $q){

	function httpGet(path) {
		var deferred = $q.defer();
		$http.get(path).success(function (data) {
			deferred.resolve(data);
		}).error(function(error){
			deferred.reject(error);
		});
		return deferred.promise;
	}

	function getUsers(groupId) {
		var deferred = $q.defer(),
			path = 'api/users';

		if (groupId) {
			path += '?groupId=' + groupId;
		}

		$http.get(path).success(function (data) {
			deferred.resolve(data);
		}).error(function(error){
			deferred.reject(error);
		});

		return deferred.promise;
	}

	function getDevUsers() {
		return $q.all([getUsers(7), getUsers(16)]).then(function (data) {
			var users = [];
			data.forEach(function (userData) {
				users = users.concat(userData.users);
			});
			return users;
		});
	}

	function getUser (userId) {
		return httpGet('api/user/' + userId);
	}

	return {
		getUsers: getUsers,
		getDevUsers: getDevUsers,
		getUser: getUser
	};
}

angular.module('RedmineBoard').factory('UserService', [
	'$http',
	'$q',
	UserService
]);
