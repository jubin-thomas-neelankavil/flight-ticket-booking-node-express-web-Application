const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flightController');

// Define routes for flight management
router.post('/create', flightController.createFlight);
router.get('/all', flightController.getAllFlights);

module.exports = router;
