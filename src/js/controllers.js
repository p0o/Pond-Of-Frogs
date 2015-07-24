'use strict';

var Controllers = angular.module('Controllers',[]);

/**
* PondController
* Handling the whole pond with frogs in it
* 
*/
Controllers.controller('PondController',['$scope',function($scope) {
	// add new frog to the pond
	$scope.newFrog = function() {
		var frog = {};
		frog.name = 'Frog' + (Math.floor(Math.random()*10)+50);
		frog.gender = Math.random() > 0.5? 'Dude' : 'Lady';
		frog.team = Math.random() > 0.5? 'barcelona' : 'real-madrid';
		frog.age = 0;
		//adding a new team member
		$scope.members[frog.team]+=1;
		$scope.frogs.push(frog);
		$scope.isStarted=true;
	}
	// incrementing age for all frogs
	$scope.ageCounter = function() {
		setInterval(function() {
			$scope.frogs = $scope.frogs.map(function(val){
				if(val.age !== -1) // is not dead
					val.age+=1;
				return val;
			});
			$scope.$apply();
		},1000);
	}
	// change frog name
	$scope.changeName = function(frogkey) {
		$scope.frogs.forEach(function(val,index) {
			if (val.$$hashKey === frogkey) {
				val.name = 'Frog' + (Math.floor(Math.random()*10)+50);
				$scope.frogs[index] = val;
			}
		});
	}
	// Change fan club team
	$scope.changeTeam = function(frogkey) {
		$scope.frogs.forEach(function(val,index) {
			if (val.$$hashKey === frogkey) {
				// decrementing team member for results
				$scope.members[val.team]-=1;
				// changing team
				val.team==='barcelona'? val.team='real-madrid': val.team='barcelona';
				$scope.frogs[index] = val;
				// incrementing team member for results
				$scope.members[val.team]+=1;
			}
		});
	}
	// Change frog's gender (by surgery!)
	$scope.changeGender = function(frogkey) {
		$scope.frogs.forEach(function(val,index) {
			if (val.$$hashKey === frogkey) {
				val.gender==='Dude'? val.gender='Lady': val.gender='Dude';
				$scope.frogs[index] = val;
			}
		});
	}
	// Kill the poor frog and give it some time to destroy
	$scope.changeToDead = function(frogkey) {
		$scope.frogs.forEach(function(val,index) {
			if (val.$$hashKey === frogkey && val.age !==-1) {
				val.age = -1;
				$scope.frogs[index] = val;
				// give some time for nature to destroy the dead body
				setTimeout(function(deadFrogIndex,deadFrogTeam) {
					$scope.members[deadFrogTeam]-=1;
					$scope.frogs.splice(deadFrogIndex,1);
				},1000,index,$scope.frogs[index].team);
			}
		});
	}
	// object containing all frogs
	$scope.frogs = [];
	// design variables
	$scope.isStarted=false;
	// object containing team members
	$scope.members = {};
	$scope.members['barcelona'] = 0;
	$scope.members['real-madrid'] = 0;
	// running age incrementer
	$scope.ageCounter();
	
	
}]);

// exporting all controllers
module.exports = Controllers;