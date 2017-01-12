'use strict'

angular.module('xcleagueApp')
    .controller('MainCtrl', function($scope, $meteor) {

        // var filter = {$or: [{pilot: 'Austin Pinkney'}]}
        // var filter = {$and: [{pilot: 'Neil Brown'},{club: 'Thames Valley'}]}
        var filter = {$and: [{total: {$gt: 200}},{total: {$lte: 210}}]}

        var paging = {
            limit: 100
        }

        // $scope.$meteorSubscribe('flights', filter, paging).then(function(){
        //     $scope.flights = $meteor.collection(function(){
        //         return Flights.find(filter, paging);
        //     });
        //     console.log($scope.flights);
        // });

    $scope.$meteorSubscribe('clubs').then(function(){
            $scope.clubs = $meteor.collection(function(){
                return Flights.find();
            });
            console.log($scope.clubs);
        });

    // $scope.things = $scope.$meteorCollection(Things);
    // $meteor.autorun($scope, function() {
    //   $scope.$meteorSubscribe('things');
    // });

    // $meteor.session('thingsCounter').bind($scope, 'page');
      
    // $scope.save = function() {
    //   if($scope.form.$valid) {
    //     $scope.things.save($scope.newThing);
    //     $scope.newThing = undefined;
    //   }
    // };
        
    // $scope.remove = function(thing) {
    //   $scope.things.remove(thing);
    // };
});