// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the MERN Auth Backend! <br> Created By Rohullah Hamid');
  });


//  Middlewar
app.use(express.json());

app.use('/api', authRoutes);

//  MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
