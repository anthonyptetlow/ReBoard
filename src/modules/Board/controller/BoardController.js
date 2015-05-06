angular.module('RedmineBoard').controller('BoardController', [
	'$state',
	'$stateParams',
	'IssueService',
	'StateService',
	'IssueList',
	'User',
	function ($state, $stateParams, IssueService, StateService, IssueList, User) {
		var Board = this;
		Board.issues = IssueList.issues;
		Board.user = User.user;

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
			IssueService.getIssues(Board.user.id).then(function (data) {
				Board.issues = data.issues;
				if(cb) {
					cb();
				}
			});
		}

		StateService.setReloadDataFunction(loadIssues);
	}
]);
