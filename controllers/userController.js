const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');



exports.getregister = (req, res) => {
  res.render('register', { message: 'Welcome! You can register here.' });

}


// Register a new user
exports.register = (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  User.findOne({ username }, (err, existingUser) => {
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err });
      } else {
        const user = new User({
          username,
          password: hash,
        });

        user.save((err, user) => {
          if (err) {
            return res.status(500).json({ error: err });
          }

          // Generate a JWT token
          const token = jwt.sign({ userId: user._id }, config.secret, {
            expiresIn: '1h',
          });

          res.status(201).json({ message: 'User registered', token });
        });
      }
    });
  });
};

// Log in an existing user
exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      const token = jwt.sign({ userId: user._id }, config.secret, {
        expiresIn: '1h',
      });

      res.status(200).render({ message: 'Authentication successful', token });
    });
  });
};
