const express = require('express');
const router = express.Router();

// Define the root route
router.get('/', (req, res) => {
  res.render('index', { title: 'Flight Ticket and Trip Package App' });
});

module.exports = router;
