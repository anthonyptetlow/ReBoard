'use strict';

angular.module('RedmineBoard', [
	'ngAnimate',
	'ui.router',
	'ui.bootstrap',
	'ngStorage',
	'ngLodash'
	]).config(function($stateProvider, $urlRouterProvider) {


	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('app', {
		abstract: true,
		templateUrl: './modules/Home/partials/navigation.html',
		controller: 'AppController as App'
	})
	.state('app.board', {
		url: '/board/:userId',
		templateUrl: './modules/Board/partials/Board.html',
		controller: 'BoardController as Board',
		resolve: {
			IssueList: function ($stateParams, IssueService) {
				return IssueService.getIssues($stateParams.userId);
			},
			User: function ($stateParams, UserService) {
				return UserService.getUser($stateParams.userId);
			}
		}
	}).state('app.users', {
		url: '/',
		templateUrl: './modules/Users/partials/Users.html',
		controller: 'UsersController as Users',
		resolve: {
			UserList: function (UserService) {
				return UserService.getDevUsers();
			}
		}
	});
}).run(function ($rootScope) {
	$rootScope.loaded = false;
});
