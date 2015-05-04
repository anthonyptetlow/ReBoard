function StateService($rootScope, $state){

	var reloadFn;

	function setReloadDataFunction(fn) {
		reloadFn = fn;
	}

	function reload(cb) {
		reloadFn(cb);
	}

	$rootScope.$on('$stateChangeStart',	function() {//event, toState, toParams, fromState, fromParams){
		reloadFn = function () { $state.reload(); };
	});

	return {
		setReloadDataFunction: setReloadDataFunction,
		reloadData: reload
	};
}

angular.module('RedmineBoard').factory('StateService', [
	'$rootScope',
	'$state',
	StateService
]);
