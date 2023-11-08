const Trip = require('../models/Trip');

// Create a new trip
exports.createTrip = (req, res) => {
  const { destination, startDate, endDate } = req.body;

  const trip = new Trip({
    destination,
    startDate,
    endDate,
    user: req.user.userId, // Assuming you have authentication middleware that sets req.user
  });

  trip.save((err, trip) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(201).json({ message: 'Trip created', trip });
  });
};

// Get all trips for the current user
exports.getAllTrips = (req, res) => {
  Trip.find({ user: req.user.userId }, (err, trips) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    res.status(200).json({ trips });
  });
};
