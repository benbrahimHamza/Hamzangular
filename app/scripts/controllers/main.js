'use strict';

/**
 * @ngdoc function
 * @name hamzangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hamzangularApp
 */
angular.module('hamzangularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.titles = [
      'Hamza Benbrahim',
      'FullStack Software Engineer'
    ];
  });
