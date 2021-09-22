const express = require('express');
const router = express.Router();
const config = require('config');
const stripe = require('stripe')(config.get('stripeSecretKey'));
const { v4: uuidv4 } = require('uuid');

// @route  POST api/orders/placeorder
// @desc
// @access Private
router.post('/placeorder', async (req, res) => {
  const { token, subtotal, currentUser, cartItems } = req.body;

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
      res.send('Payment Done');
    } else {
      res.send('Payment Failed');
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
