'use strict';

angular.module('RedmineBoard', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('signIn', {
		url: '/',
		templateUrl: './modules/KeyAuth/partials/InputKey.html',
		controller: 'KeyController as Key'
	}).state('board', {
		url: '/board',
		templateUrl: './modules/Board/partials/Board.html',
		controller: 'BoardController as Board'
	});
});
