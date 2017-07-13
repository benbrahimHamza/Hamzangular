'use strict';

/**
 * @ngdoc function
 * @name hamzangularApp.controller:PresentationCtrl
 * @description
 * # PresentationCtrl
 * Controller of the hamzangularApp
 */
angular.module('hamzangularApp')
  .controller('PresentationCtrl', function($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://api.github.com/users/benbrahimHamza'
    }).then(function(success) {
      $scope.gitUser = success.data;
    });
  });
