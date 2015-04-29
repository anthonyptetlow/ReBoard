angular.module('RedmineBoard').controller('BoardController', [
	'$http',
	'$state',
	'$stateParams',
	function ($http, $state, $stateParams) {
		var Board = this;
		Board.userId = $stateParams.userId;


		function filterInProgress(issue) {
			return issue.status.name === 'In Progress';
		}

		function filterAwaiting(issue) {
			return issue.status.name === 'Awaiting user response';
		}

		function filterToDo (issue) {
			return !(filterInProgress(issue) || filterAwaiting(issue));
		}

		Board.columns = [
			{
				name: 'Todo',
				filterFn: filterToDo
			},
			{
				name: 'In Progress',
				filterFn: filterInProgress
			},
			{
				name: 'Awaiting User Response',
				filterFn: filterAwaiting
			}
		];

		function getIssues () {
			$http.get('/api/issues?user=' + Board.userId).success(function (data) {

				Board.issues = data.issues;

			}).error(function(){
				Board.errorMessage = 'Unable to Load Issues';
			});
		}

		Board.getName = function(issue) {
			return issue.priority.id;
		};

		getIssues();
	}
]);
