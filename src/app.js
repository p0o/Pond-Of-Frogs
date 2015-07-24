'use strict';

var angular = require('angular');
var Controllers = require('./js/controllers');
var Filters = require('./js/filters');

// Injecting modules
angular.module('pondApp',[Controllers.name,Filters.name]);