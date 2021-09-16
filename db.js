const mongoose = require('mongoose');

const mongoURL =
  'mongodb+srv://sumit123:sumit123@mernpizza.jr3jx.mongodb.net/mern-pizza';

const connectDB = async () => {
  try {
    mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected....');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
