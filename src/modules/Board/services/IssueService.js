function IssueService($http, $q, $localStorage){

	function processIssue(issue) {
		if ($localStorage[issue.assigned_to.id].issues.indexOf(issue.id) < 0) {
			issue.isNew = true;
		} else {
			issue.isNew = false;
		}
	}

	function markIssueAsRead(issue) {
		if ($localStorage[issue.assigned_to.id].issues.indexOf(issue.id) < 0) {
			$localStorage[issue.assigned_to.id].issues.push(issue.id);
		}
		issue.isNew = false;
	}

	function initLocalIssueData(userId, issues) {
		if (angular.isUndefined($localStorage[userId])) {
			$localStorage[userId] = {};
		}

		if (angular.isUndefined($localStorage[userId].issues)) {
			$localStorage[userId].issues = [];
			var userIssues = $localStorage[userId].issues;
			issues.forEach(function (issue) {
				userIssues.push(issue.id);
			});
		}

	}

	function getIssues(userId) {
		var deferred = $q.defer(),
			path = 'api/issues';

			if (userId) {
				path += '?user=' + userId;
			}
		$http.get(path).success(function (data) {


			initLocalIssueData(userId, data.issues);
			data.issues.forEach(processIssue);

			deferred.resolve(data);
		}).error(function(error){
			deferred.reject(error);
		});
		return deferred.promise;
	}

	return {
		getIssues: getIssues,
		markAsRead: markIssueAsRead
	};
}

angular.module('RedmineBoard').factory('IssueService', [
	'$http',
	'$q',
	'$localStorage',
	IssueService
]);
