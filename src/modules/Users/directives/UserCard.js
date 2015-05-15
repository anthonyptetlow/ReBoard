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
			link: function(scope) {

				function stringToColour(str) {
					var color;
					// str to hash
					for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
					// int/hash to hex
					for (i = 0, color = '#'; i < 3; color += ('00' + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
					return color;
				}
				// scope.user.color = stringToColour(scope.user.firstname + ' ' + scope.user.lastname);
				scope.user.color = stringToColour(scope.user.login);
			}
		};
	}
]);
