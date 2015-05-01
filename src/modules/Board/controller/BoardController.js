angular.module('RedmineBoard').controller('BoardController', [
	'$state',
	'$stateParams',
	'IssueService',
	function ($state, $stateParams, IssueService) {
		var Board = this;
		Board.userId = $stateParams.userId;

		Board.filterAwaiting = function filterAwaiting(issue) {
			return issue.status.name === 'Awaiting user response';
		};

		Board.filterToDo = function filterToDo (issue) {
			return issue.status.name === 'New';
		};

		Board.filterTesting = function filterTesting (issue) {
			return issue.status.name === 'Testing';
		};

		Board.filterInProgress = function filterInProgress(issue) {
			return !(Board.filterToDo(issue) || Board.filterAwaiting(issue) || Board.filterTesting(issue));
		};

		// Board.columns = [
		// 	{
		// 		name: 'Todo',
		// 		filterFn: filterToDo
		// 	},
		// 	{
		// 		name: 'Awaiting User Response',
		// 		filterFn: filterAwaiting
		// 	},
		// 	{
		// 		name: 'In Progress',
		// 		filterFn: filterInProgress
		// 	},
		// 	{
		// 		name: 'Testing',
		// 		filterFn: filterTesting
		// 	}
		// ];

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
