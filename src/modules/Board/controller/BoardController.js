angular.module('RedmineBoard').controller('BoardController', [
	'$state',
	'$stateParams',
	'lodash',
	'IssueService',
	'StateService',
	'IssueList',
	'User',
	function ($state, $stateParams, lodash, IssueService, StateService, IssueList, User) {
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

			//foreach issue:
				///If Issue exists, update it else add issue
				data.issues.forEach(function (issue) {
					var existingIssueIndex = lodash.findIndex(Board.issues, function (boardIssue) {
						return boardIssue.id === issue.id;
					});

					if(existingIssueIndex >= 0) {
						Board.issues[existingIssueIndex] = issue;
							console.log('Issue Updated: ', issue.id);
					} else {
						Board.issues.push(issue);
					}
				});
				// If issue doesnt exist in new data then remove is from the board.
				lodash.remove(Board.issues, function (boardIssue) {
					var existingIssueIndex = lodash.findIndex(data.issues, function (issue) {
						return boardIssue.id === issue.id;
					});
					if(existingIssueIndex < 0) {
						console.log('Issue Removed: ', boardIssue.id);
					}
					return existingIssueIndex < 0;
				});

				if(cb) {
					cb();
				}
			});
		}

		StateService.setReloadDataFunction(loadIssues);
	}
]);
