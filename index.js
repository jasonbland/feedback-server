const express = require('express');
const app = express();
require('./routes/authRoutes')(app);
require('./services/passport');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
