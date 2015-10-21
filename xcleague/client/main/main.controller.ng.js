'use strict'

angular.module('xcleagueApp')
    .controller('MainCtrl', function($scope, $meteor) {

        // var filter = {$or: [{pilot: 'Neil Brown'},{pilot: 'Austin Pinkney'}]}
        // var filter = {$and: [{pilot: 'Neil Brown'},{club: 'Thames Valley'}]}
        var filter = {$and: [{club: 'Thames Valley'},{score: {$gt: "200"}}]}

        var paging = {
            limit: 100
        }

        $scope.$meteorSubscribe('flights', filter, paging).then(function(){
            $scope.flights = $meteor.collection(function(){
                return Flights.find(filter, paging);
            });
            console.log($scope.flights);
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