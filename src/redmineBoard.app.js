'use strict';

angular.module('RedmineBoard', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	// .state('signIn', {
	// 	url: '/',
	// 	templateUrl: './modules/KeyAuth/partials/InputKey.html',
	// 	controller: 'KeyController as Key'
	// })
	.state('board', {
		url: '/board/:userId',
		templateUrl: './modules/Board/partials/Board.html',
		controller: 'BoardController as Board'
	}).state('users', {
		url: '/',
		templateUrl: './modules/Users/partials/Users.html',
		controller: 'UsersController as Users'
	});
});
