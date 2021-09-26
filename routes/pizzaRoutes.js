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

router.post('/addpizza', async (req, res) => {
  try {
    const pizza = req.body.pizza;

    const { name, image, category, description } = pizza;

    const newPizza = new Pizza({
      name,
      image,
      category,
      description,
      prices: [pizza.prices],
      varients: ['small', 'medium', 'large'],
    });

    await newPizza.save();

    res.json('New Pizza Added!!');
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
