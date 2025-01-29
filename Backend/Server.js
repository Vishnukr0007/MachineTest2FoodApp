const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const menuRoutes = require("./routes/MenuRoutes")
const menuItemsRoutes = require('./routes/MenulistRoutes');
const itemRoutes=require('./routes/ItemsRoute')
const app = express();
const PORT = 5000;
//middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use("/api", menuRoutes);
app.use('/api/menu', menuItemsRoutes);
app.use('/api',itemRoutes)

mongoose.connect('mongodb://localhost:27017/FoodApp', {
  
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});