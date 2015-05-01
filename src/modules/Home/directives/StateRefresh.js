angular.module('RedmineBoard').directive('stateRefresh', [
	'$state',
	'$rootScope',
	function($state, $rootScope){
	return {
		scope: {},
		controller: function($scope, $element) {
			var AtateRefresh = this;

			var icon = $element.find('i');

			AtateRefresh.reload = function () {
				$state.reload();
				// icon.addClass('fa-spin');
			};
		},
		controllerAs: 'Refresh',
		template: '<i class="fa fa-refresh" data-ng-click="Refresh.reload()"></i>'
	};
}]);
