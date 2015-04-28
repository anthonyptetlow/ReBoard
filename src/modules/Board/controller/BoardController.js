angular.module('RedmineBoard').controller('BoardController', [
	'$http',
	'$filter',
	function ($http, $filter) {
		var Board = this;
		Board.key = localStorage.getItem('apiKey');



		function filterToDo (issue) {
			return !(filterInProgress(issue) || filterAwaiting(issue));
		}

		function filterInProgress(issue) {
			return issue.status.name === 'In Progress';
		}

		function filterAwaiting(issue) {
			return issue.status.name === "Awaiting user response";
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

		$http.get('/api/issues?key=' + Board.key + '&user=130').success(function (data) {

			Board.issues = data.issues;
			console.log(data.issues);

		}).error(function(){
			Board.errorMessage = 'Unable to Load Issues';
		});

		Board.getName = function(issue) {
			return issue.priority.id;
		};
	}
]);
