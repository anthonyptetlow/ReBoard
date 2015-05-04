angular.module('RedmineBoard').directive('issueCard', [
	'IssueService',
	function(IssueService){

		function getPriorityClass(priorityNo) {
			if (priorityNo >= 6) {
				return 'imp-priority';
			} else if (priorityNo >= 5) {
				return 'high-priority';
			} else if (priorityNo === 4) {
				return 'med-priority';
			}
			return 'low-priority';
		}

		return {
			scope: {
				issue: '='
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {//, $element, $attrs, $transclude) {
				var Issue = this;

				Issue.openIssue = function () {
					IssueService.markAsRead(Issue);
				};

			},
			controllerAs: 'Issue',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: './modules/Board/partials/IssueCard.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, Issue) {

				for (var attrname in $scope.issue) {
					Issue[attrname] = $scope.issue[attrname];
				}

				Issue.classes = getPriorityClass(Issue.priority.id);
			}
		};
	}
]);
