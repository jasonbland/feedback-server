const express = require('express');
const app = express();
require('./routes/authRoutes')(app);
require('./models/User');
require('./services/passport');

const mongoose = require('mongoose');
mongoose.connect(process.env.PROD_MONGODB);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
