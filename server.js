const express = require('express');
const connectDB = require('./db');
const pizzaRoutes = require('./routes/pizzaRoutes');
const userRoutes = require('./routes/userRoutes');
const auth = require('./routes/auth');
const ordersRoute = require('./routes/ordersRoute');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init BodyParser
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', auth);
app.use('/api/orders', ordersRoute);

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
