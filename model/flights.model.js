Flights = new Mongo.Collection('flights');

Flights.allow({
  insert: function(userId, flight) {
    return userId;
  },
  update: function(userId, flight, fields, modifier) {
    return userId;
  },
  remove: function(userId, flight) {
    return userId;
  }
});