const express = require('express');
const router = express.Router();
const config = require('config');
const stripe = require('stripe')(config.get('stripeSecretKey'));
const { v4: uuidv4 } = require('uuid');
const Order = require('../models/Order');

// @route  POST api/orders/placeorder
// @desc   Placing Order
// @access Private
router.post('/placeorder', async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

  const { address_city, address_country, address_line1, address_zip } =
    token.card;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: 'inr',
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );

    if (payment) {
      const order = new Order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        shippingAddress: {
          city: address_city,
          country: address_country,
          street: address_line1,
          pincode: address_zip,
        },
        orderAmount: subtotal,
        transactionId: payment.source.id,
      });

      await order.save();

      res.send('Order Placed Successfully!!');
    } else {
      res.send('Payment Failed');
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route  GET api/orders/getuserorders
// @desc   Get logged in user orders
// @access Private
router.post('/getuserorders', async (req, res) => {
  const { userid } = req.body;

  try {
    const orders = await Order.find({ userid }).sort({ _id: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
