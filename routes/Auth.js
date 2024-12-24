// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

const generateToken = (id) => {
  return jwt.sign({ id }, "abcd", { expiresIn: '1h' });
};

// Register route
router.post('/register', async (req, res) => {
    console.log("register")
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(200).json({ message: 'User already exists' });
  }

  const user = new User({ username, password });
  await user.save();

  const token = generateToken(user._id);
  res.status(201).json({ token });
});

// Login route
router.post('/login', async (req, res) => {
    console.log("login")

  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = generateToken(user._id);
  res.json({ token });
});

module.exports = router;
