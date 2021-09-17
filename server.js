const express = require('express');
const connectDB = require('./db');
const pizzaRoutes = require('./routes/pizzaRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect Database
connectDB();

// BodyParser
app.use(express.json());

// Routes
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Server Working!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
