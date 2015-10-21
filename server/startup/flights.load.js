Meteor.startup(function() {
  if(Flights.find().count() === 0) {
    var flights = [
      {
        'name': 'flight 1'
      },
      {
        'name': 'flight 2'
      }
    ];
    flights.forEach(function(flight) {
      Flights.insert(flight);
    });
  }
});