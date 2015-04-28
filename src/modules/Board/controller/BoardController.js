angular.module('RedmineBoard').controller('BoardController', [
	'$http',
	function ($http) {
		var key = localStorage.getItem('apiKey');
		$http.get('http://redmine.carnyx.com/issues.json?key=' + key + '&assigned_to_id=130').success(function (data) {
			console.log(data);
		}).error(function(error){
			console.log(error);
		});
	}
]);
