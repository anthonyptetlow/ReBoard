'use strict';

angular.module('RedmineBoard', ['ui.router', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		abstract: true,
		templateUrl: './modules/Home/partials/navigation.html',
		controller: 'AppController as App'
	})
	// .state('signIn', {
	// 	url: '/',
	// 	templateUrl: './modules/KeyAuth/partials/InputKey.html',
	// 	controller: 'KeyController as Key'
	// })
	.state('app.board', {
		url: '/board/:userId',
		templateUrl: './modules/Board/partials/Board.html',
		controller: 'BoardController as Board'
	}).state('app.users', {
		url: '/',
		templateUrl: './modules/Users/partials/Users.html',
		controller: 'UsersController as Users'
	});
});
