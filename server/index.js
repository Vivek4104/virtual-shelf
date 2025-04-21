// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// server/index.js
const itemRoutes = require('./routes/itemRoutes');
app.use('/api/items', itemRoutes);


mongoose.connect("mongodb+srv://vivek990942:vivek1234@cluster0.lxfkshd.mongodb.net/");


app.listen(5000, () => console.log("Server running on port 5000"));
