const express = require('express');
const router = express.Router();
const tripController = require('../controllers/tripController');

// Define routes for trip management
router.post('/create', tripController.createTrip);
router.get('/all', tripController.getAllTrips);

module.exports = router;
