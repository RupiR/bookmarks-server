require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const validateBearerToken = require('./validate-bearer-token');
const bookmarksRouter = require('./bookmark-router/bookmark-router');
const errorHandler = require('./errorHandler');

const { NODE_ENV } = require('./config');
console.log(NODE_ENV);
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

const app = express();
app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(validateBearerToken);

app.use('/api/bookmarks', bookmarksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the bookmark API!');
});

app.use(errorHandler);

module.exports = app;
