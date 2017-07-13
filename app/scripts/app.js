'use strict';

/**
 * @ngdoc overview
 * @name hamzangularApp
 * @description
 * # hamzangularApp
 *
 * Main module of the application.
 */
angular
  .module('hamzangularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
