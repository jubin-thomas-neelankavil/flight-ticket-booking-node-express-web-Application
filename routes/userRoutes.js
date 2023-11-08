const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes for user registration and login
router.post('/register', userController.register);

// GET request for the registration page
router.get('/register', userController.getregister);

router.post('/login', userController.login);

module.exports = router;
