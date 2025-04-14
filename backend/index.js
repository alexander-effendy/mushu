const express = require('express');
const cors = require('cors');
require('dotenv').config();

const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', chatRoutes);

app.listen(PORT, () => {
  // console.log(`🚀 Mushu backend is running on http://localhost:${PORT}`);
  console.log('Mushu is awake now....🐱');
  console.log('Chat with Mushu:\n')
});
