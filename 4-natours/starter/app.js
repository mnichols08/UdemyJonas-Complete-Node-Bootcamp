// Express Application
const express = require('express'); // self explanatory - simply loads the Express library
const morgan = require('morgan'); // logging middleware that reports each request to the server in the console

const tourRouter = require('./routes/tourRoutes'); // loads custom module to handle tour routing
const userRouter = require('./routes/userRoutes'); // loads custom module to handle user routing

const app = express(); // defines the application as an express application

app.use(express.json()); // built in middleware that allows us to consume raw json
app.use(express.static(`${__dirname}/public`)); // opens up public directory for static files (not routing!)

if (process.env.NODE_ENV === 'development') app.use(morgan('dev')); // checks for development environment variable and initilializes 'morgan' if found

app.use((req, res, next) => {
  // console.log('My first middleware function');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
