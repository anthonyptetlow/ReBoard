angular.module('RedmineBoard').directive('stateRefresh', [
	'$timeout',
	'StateService',
	function($timeout, StateService) {//, $rootScope){
	return {
		scope: {},
		controller: function($scope, $element) {
			var AtateRefresh = this;

			var icon = $element.find('i');

			AtateRefresh.reload = function () {
				icon.addClass('fa-spin');
				var start = new Date();
				StateService.reloadData(function () {
					var timeTaken = new Date() - start;
					console.log(timeTaken);
					if (500 - timeTaken > 0) {
						$timeout(function () {
							icon.removeClass('fa-spin');
						}, 500 - timeTaken);
					} else {
							icon.removeClass('fa-spin');
					}
				});
			};
		},
		controllerAs: 'Refresh',
		template: '<i class="fa fa-refresh" data-ng-click="Refresh.reload()"></i>'
	};
}]);
