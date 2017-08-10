'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('WatchlistService', function WatchlistService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
       var loadModel = function () {
            var model = {
                        watchlists: localStorage['StockDog.watchlists'] ? JSON.parse(localStorage['StockDog.watchlists']) : [],
                        nextId: localStorage['StockDog.nextId'] ? parseInt(localStorage['StockDog.nextId']) : 0
            };
             return model;
       };
    var saveModel = function(){
          localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
          localStorage['StockDog.nextId'] = Model.nextId;
    };
    var findById = function(listId){
          return _.find(Model.watchlists,function(watchlist){
              return watchlist.id === parseInt(listId);
          })
    };
    this.query = function (listId) {
          if (listId) {
            return findById(listId);
          } else {
              console.log('Model query watchlist'+Model.watchlists)  
             return Model.watchlists;
         }
   };
   this.save = function (watchlist) {
         console.log('model nextId'+Model.nextId);
        
         var watchListObject = {
            id : Model.nextId++,
            name : watchlist.name,
            description : watchlist.description
         };
         console.log('Model2 '+watchListObject.id)
            //    watchlist.id = Model.nextId++;
         Model.watchlists.push(watchListObject);
         saveModel();
   }; 
   this.remove = function(watchlist){
         _.remove(Model.watchlists, function (list) {
           return list.id === watchlist.id;
          });
          saveModel();
   };
   var Model = loadModel();
  });
