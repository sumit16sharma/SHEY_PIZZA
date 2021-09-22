const express = require('express');
const connectDB = require('./db');
const pizzaRoutes = require('./routes/pizzaRoutes');
const userRoutes = require('./routes/userRoutes');
const auth = require('./routes/auth');

const app = express();

// Connect Database
connectDB();

// Init BodyParser
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', auth);

app.get('/', (req, res) => {
  res.send('Server Working!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
