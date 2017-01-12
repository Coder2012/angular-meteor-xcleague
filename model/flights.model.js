Flights = new Mongo.Collection('flights');

Flights.permit(['insert', 'update', 'remove']).never().apply();