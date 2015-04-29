angular.module('RedmineBoard').controller('KeyController', [
	'$state',
	function ($state) {
		var Key = this;
		Key.storeDetails = function (key, userId) {
			if(!angular.isDefined(key)) {
				Key.keyError = 'Please Supply a key';
			} else if(!angular.isDefined(userId)) {
				Key.userError = 'Please Supply a user id';
			} else {
				localStorage.setItem('apiKey', key);
				localStorage.setItem('apiUserId', userId);
				$state.go('board');
			}
		};
	}
]);
