const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = new User({ name, email, password });

    await user.save();
    res.send('User Registered Successfully');
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
