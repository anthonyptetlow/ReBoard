angular.module('RedmineBoard').controller('AppController', [
	'$state',
	function ($state) {
		var App = this;

		App.reload = function () {
			$state.reload();
		};
	}
]);
