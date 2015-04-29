angular.module('RedmineBoard').directive('issueCard', [
	function(){
		return {
			scope: {
				issue: '='
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope) {//, $element, $attrs, $transclude) {
				var Issue = this;

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

				Issue.classes = getPriorityClass($scope.issue.priority.id);
			},
			controllerAs: 'Issue',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: './modules/Board/partials/IssueCard.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function() {}
		};
	}
]);
