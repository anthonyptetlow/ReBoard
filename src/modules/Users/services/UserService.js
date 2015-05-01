function UserService($http, $q){

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
		return $q.all([getUsers(7), getUsers(16)]);
	}

	return {
		getUsers: getUsers,
		getDevUsers: getDevUsers
	};
}

angular.module('RedmineBoard').factory('UserService', [
	'$http',
	'$q',
	UserService
]);
