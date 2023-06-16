const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes/api');

const app  = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/', apiRoutes);

module.exports = app;