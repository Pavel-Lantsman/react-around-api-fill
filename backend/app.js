require('dotenv').config();

const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./common/config');
const routes = require('./routes');
const module: mongoose = require("mongoose");

const { DB_ADDRESS, PORT = 3000 } = process.env;

const app = express();

app.use(rateLimit(config.rateLimiter));
app.use(helmet());

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(DB_ADDRESS);

mongoose.connect('mongodb://localhost:27017/aroundb')

app.use(routes);

// app.listen(PORT);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
