function IssueService($http, $q){
	function getIssues(userId) {
		var deferred = $q.defer(),
			path = 'api/issues';

			if (userId) {
				path += '?user=' + userId;
			}
		$http.get(path).success(function (data) {
			deferred.resolve(data);
		}).error(function(error){
			deferred.reject(error);
		});
		return deferred.promise;
	}

	return {
		getIssues: getIssues
	};
}

angular.module('RedmineBoard').factory('IssueService', [
	'$http',
	'$q',
	IssueService
]);
