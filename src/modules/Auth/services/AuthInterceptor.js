angular.module('RedmineBoard').factory('AuthInteceptor', [
	'$q',
	function () {
		return {
			request: function (conf) {
				// if (conf.url.indexOf('/api/') === 0) {
					//Add key to request somehow)
				// }
				return conf;
			}
		};
	}
]);

angular.module('RedmineBoard').config(['$httpProvider', function ($httpProvider) {
	$httpProvider.interceptors.push('AuthInteceptor');
}]);
