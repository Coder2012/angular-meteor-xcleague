'use strict'

Meteor.publish('flights', function(filter, paging){
	return Flights.find(filter, paging);
});