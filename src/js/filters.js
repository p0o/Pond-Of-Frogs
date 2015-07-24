'use strict';

var Filters = angular.module('Filters',[]);

// Filtering club names to show club icon instead
Filters.filter('showTeamIcon',function() {
	return function(input) {
		return input === 'barcelona'? 'build/img/barcelona.png': 'build/img/madrid.png';
	};
});

// Filtering time
Filters.filter('showTime',function() {
	return function(input) {
		if(input === -1)
			return 'DEAD';
		else if(input <= 60)
			return input + ' s';
		else
			return parseInt(input/60) + ':' + parseInt(input%60);
	};
});

module.exports = Filters;