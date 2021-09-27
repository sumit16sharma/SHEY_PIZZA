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

router.post('/getpizzabyid', async (req, res) => {
  try {
    const id = req.body.pizzaid;

    const pizza = await Pizza.findById(id);

    res.json(pizza);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/editpizza', async (req, res) => {
  try {
    const editedpizza = req.body.editedpizza;

    const pizza = await Pizza.findOne({ _id: editedpizza._id });

    pizza.name = editedpizza.name;
    pizza.image = editedpizza.image;
    pizza.category = editedpizza.category;
    pizza.description = editedpizza.description;
    pizza.prices = [editedpizza.prices];

    await pizza.save();

    res.send('Pizza Details Edited Successfully');
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/deletepizza', async (req, res) => {
  try {
    const pizzaid = req.body.pizzaid;

    await Pizza.findOneAndDelete({ _id: pizzaid });

    res.send('Pizza Deleted Successfully');
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
