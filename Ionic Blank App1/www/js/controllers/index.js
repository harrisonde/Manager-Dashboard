angular
    .module('starter',[])
	.controller('IndexController', ['$scope', function ($scope, Login) {
    	$scope.submitLogin = function () {
    	    Login.getAppKey();
    	}
    }]);