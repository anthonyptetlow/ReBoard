angular.module('RedmineBoard').controller('BoardController', [
	'$state',
	'$stateParams',
	'IssueService',
	'StateService',
	'IssueList',
	function ($state, $stateParams, IssueService, StateService, IssueList) {
		var Board = this;
		Board.userId = $stateParams.userId;
		Board.issues = IssueList.issues;

		Board.filterAwaiting = function(issue) {
			return issue.status.name === 'Awaiting user response';
		};

		Board.filterToDo = function(issue) {
			return issue.status.name === 'New';
		};

		Board.filterTesting = function(issue) {
			return issue.status.name === 'Testing';
		};

		Board.filterInProgress = function(issue) {
			return !(Board.filterToDo(issue) || Board.filterAwaiting(issue) || Board.filterTesting(issue));
		};

		Board.getName = function(issue) {
			return issue.priority.id;
		};

		function loadIssues (cb) {
			IssueService.getIssues(Board.userId).then(function (data) {
				Board.issues = data.issues;
				if(cb) {
					cb();
				}
			});
		}

		StateService.setReloadDataFunction(loadIssues);
	}
]);
