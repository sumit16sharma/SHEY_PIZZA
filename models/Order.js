const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  orderItems: [],
  shippingAddress: {
    type: Object,
    required: true,
  },
  orderAmount: {
    type: Number,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
