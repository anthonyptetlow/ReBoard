function UserService($http, $q){


	function stringToColor(str) {
					var color;
					// str to hash
					for (var i = 0, hash = 0; i < str.length; i++){
						hash = str.charCodeAt(i) + ((hash << 5) - hash);
					}
					// int/hash to hex
					for (i = 0, color = '#'; i < 3; i++) {
						color += ('00' + ((hash >> i * 8) & 0xFF).toString(16)).slice(-2);
					}
					return color;
	}

	function addColorToUser(user) {
		user.color = stringToColor(user.login);
	}

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
			data.users.forEach(addColorToUser);
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
		return httpGet('api/user/' + userId).then(function (data) {
			addColorToUser(data.user);
			return data;
		});
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
