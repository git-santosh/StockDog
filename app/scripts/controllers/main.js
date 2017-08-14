'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope, $location, WatchlistService) {
   $scope.ans =42;
   $scope.$on('ping',function(){
           console.log('pong');
   })
   $scope.watchlists = WatchlistService.query();
   $scope.$watch(function () {
        return $location.path();
      }, function (path)        {
      if (_.includes(path, 'watchlist')) {
              $scope.activeView = 'watchlist';
      } else {
              $scope.activeView = 'dashboard';
      }
   });
  });
angular.module('stockDogApp').controller('myCtrl',function($scope){
        console.log($scope.ans);
        $scope.$emit('ping');
})