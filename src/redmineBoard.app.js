'use strict';

angular.module('RedmineBoard', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('signIn', {
		url: '/',
		templateUrl: './modules/Home.html'
	});
});
