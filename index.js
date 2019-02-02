const express = require('express');
const mongoose = require('mongoose');

require('./models/User');
require('./services/passport');

mongoose.connect(process.env.PROD_MONGODB);

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
