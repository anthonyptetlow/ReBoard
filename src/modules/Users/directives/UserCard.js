angular.module('RedmineBoard').directive('userCard', [
	function(){
		return {
			scope: {
				user: '='
			}, // {} = isolate, true = child, false/undefined = no change
			// controller: function() {//, $element, $attrs, $transclude) {
			// },
			controllerAs: 'User',
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: './modules/Users/partials/UserCard.html',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function() {}
		};
	}
]);
