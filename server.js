const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const equipmentRoutes = require('./routes/equipmentRoutes');
app.use('/api/equipment', equipmentRoutes);

app.get('/', (req, res) => {
  res.send('School Equipment Inventory API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});