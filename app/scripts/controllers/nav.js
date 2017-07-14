'use strict';

/**
 * @ngdoc function
 * @name hamzangularApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the hamzangularApp
 */
angular.module('hamzangularApp')
  .controller('NavCtrl', function($window, $scope) {
    $scope.scrollPos = 0;

    $window.onscroll = function() {
      $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
      $scope.$apply();
    };
  });
