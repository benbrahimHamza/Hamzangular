'use strict';

/**
 * @ngdoc function
 * @name hamzangularApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the hamzangularApp
 */
angular.module('hamzangularApp')
  .controller('ProjectCtrl', function ($scope, $http) {
  $http({
      method: 'GET',
      url: 'https://api.github.com/users/benbrahimHamza/repos'
   }).then(function (success){
     $scope.gitProjects = success.data;
   });
 }).filter('googleMapificate', function () {
   return function (location) {
     location = location || '';
     return location.replace(new RegExp(' ', 'g'), '+');
   };
 });
