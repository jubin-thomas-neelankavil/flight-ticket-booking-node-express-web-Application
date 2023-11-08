const Flight = require('../models/Flight');

// Create a new flight
exports.createFlight = (req, res) => {
  const { flightNumber, departure, arrival } = req.body;

  const flight = new Flight({
    flightNumber,
    departure,
    arrival,
  });

  flight.save((err, flight) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({ message: 'Flight created', flight });
  });
};

// Get all flights
exports.getAllFlights = (req, res) => {
  Flight.find({}, (err, flights) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(200).json({ flights });
  });
};
