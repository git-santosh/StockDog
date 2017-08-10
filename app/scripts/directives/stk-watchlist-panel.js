'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function ($location , $modal ,WatchlistService ,$routeParams) {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function postLink($scope, element, attrs) {
        $scope.watchlist = {};
        $scope.currentList = $routeParams.listId;
        $scope.gotoList = function (listId) {
          $location.path('watchlist/' + listId);
        };
        var addListModal = $modal({
            scope: $scope,
            template: 'views/templates/addlist-modal.html',
            show: false
        });

        $scope.watchlists = WatchlistService.query();

        $scope.showModal = function () {
           addListModal.$promise.then(addListModal.show);
         };

        $scope.createList = function () {
          WatchlistService.save($scope.watchlist);
          addListModal.hide();
          $scope.watchlist = {};
        };
        $scope.deleteList = function (list) {
          WatchlistService.remove(list);
          $location.path('/');
        };

        //element.text('this is the stkWatchlistPanel directive');
      }
    };
  });
