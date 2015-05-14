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

			data.issues.forEach(function (issue) {
				console.log(issue);
			});
			//foreach issue:
				// get the id
				// check for existing one
				// if existing then check updated timestamp
				// if newer then replace element in array
				// if not found then add new elements
			// Then Foreach boarded issue
				// if not in updated issue array remove


				Board.issues = data.issues;
				if(cb) {
					cb();
				}
			});
		}

		StateService.setReloadDataFunction(loadIssues);
	}
]);
