'use strict'

Meteor.publish('flights', function(filter, paging){
	return Flights.find(filter, paging);
});

Meteor.publish("clubs", function () {
  return Flights.find({}, {fields: {club: 1}});
});