angular.module('RedmineBoard').controller('AuthController', [
	'$state',
	'$localStorage',
	function ($state, $localStorage) {
		var Auth = this;
		Auth.storeDetails = function (username, password) {
			if(!angular.isDefined(username) || username.length <= 0) {
				Auth.usernameError = 'Please Supply a username';
			} else {
				Auth.usernameError = undefined;
			}

			if(!angular.isDefined(password) || password.length <= 0) {
				Auth.passwordError = 'Please Supply a password';
			} else {
				Auth.passwordError = undefined;
			}

			if (angular.isDefined(username) && angular.isDefined(password)) {
				// go something to check the auth key
				$localStorage.auth = btoa(username + ':' + password);
				$state.go('app.users');
			}
		};
	}
]);
