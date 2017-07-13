'use strict';

angular
  .module('hamzangularApp',['duScroll'])
    .controller('ScrollCtrl',function($window, $scope){
        $scope.scrollPos = 10;

        $window.onscroll = function(){
          console.log('test');
            $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
            $scope.$apply(); //or simply $scope.$digest();
        };
    });
