'use strict';

var Controllers = angular.module('Controllers',[]);

/**
* PondController
*
*/
Controllers.controller('PondController',['$scope',function($scope) {
	$scope.msg = 'helllooo';
}]);

// exporting all controllers
module.exports = Controllers;