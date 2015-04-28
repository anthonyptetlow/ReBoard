// angular.module('RedmineBoard').service('SurfService', [
// 	'$http',
// 	'$q',
// 	function ($http, $q) {


// 		function getUrl(url) {
// 			var defered = $q.defer();
// 			$http.get(url)
// 				.success(function(data) {
// 					defered.resolve(data);
// 				})
// 				.error(function(data, status) {
// 					defered.reject({status: status, data: data});
// 				});
// 			return defered.promise;
// 		}

// 		function getForecast(spotId) {
// 			var url = '/api/msw/forecast/' + spotId;
// 			return getUrl(url);
// 		}
// 		function getLocations() {
// 			return getUrl('/api/msw/locations');
// 		}



// 		return {
// 			getForecast: getForecast,
// 			getLocations: getLocations
// 		};
// 	}
// ]);
