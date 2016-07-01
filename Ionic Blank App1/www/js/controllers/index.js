'use strict';

angular.module('starter.controllers',[])
	.controller('IndexController', ['$scope', 'authenticationService', function ($scope, authenticationService) {
		$scope.submitLogin = function () {
			authenticationService.getToken();
		}
	}]);