angular.module('RedmineBoard').controller('AppController', [
	'$rootScope',
	function ($rootScope) { //$state)
		var App = this;

		$rootScope.$on('$stateChangeSuccess', function() {
			App.filter = '';
		});

	}
]);
