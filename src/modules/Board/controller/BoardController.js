angular.module('RedmineBoard').controller('BoardController', [
	'$state',
	'$stateParams',
	'IssueService',
	function ($state, $stateParams, IssueService) {
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

		Board.getName = function(issue) {
			return issue.priority.id;
		};

		Board.reload = function () {
			$state.reload();
		};

		IssueService.getIssues(Board.userId).then(function (data) {
			Board.issues = data.issues;
		});
	}
]);
