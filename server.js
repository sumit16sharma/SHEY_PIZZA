const express = require('express');
const connectDB = require('./db');
const pizzaRoutes = require('./routes/pizzaRoutes');

const app = express();

// Connect Database
connectDB();

// BodyParser
app.use(express.json());

app.use('/api/pizzas', pizzaRoutes);

app.get('/', (req, res) => {
  res.send('Server Working!!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running on PORT ${PORT}`));
