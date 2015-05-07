angular.module('RedmineBoard').controller('KeyController', [
	'$state',
	'$localStorage',
	function ($state, $localStorage) {
		var Auth = this;
		Auth.storeDetails = function (username, password) {
			if(!angular.isDefined(username)) {
				Auth.keyError = 'Please Supply a username';
			} else if(!angular.isDefined(password)) {
				Auth.userError = 'Please Supply a password';
			} else {
				// go something to check the auth key
				$localStorage.setItem('auth', btoa(username + ':' + password));
				$state.go('board');
			}
		};
	}
]);
