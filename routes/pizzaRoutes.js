const express = require('express');
const router = express.Router();
const Pizza = require('../models/Pizza');

router.get('/getAllPizzas', async (req, res) => {
  try {
    const pizzas = await Pizza.find({});

    res.json(pizzas);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
