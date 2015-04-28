angular.module('RedmineBoard').controller('KeyController', [
	'$state',
	function ($state) {
		var Key = this;

		Key.storeKey = function (key) {
			if(!angular.isDefined(key)) {
				Key.error = 'Please Supply a key';
			} else {
				localStorage.setItem('apiKey', key);
				$state.go('board');
			}
		};
	}
]);
