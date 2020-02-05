// Dependencies
const express = require('express');

// Set up Express.js app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express app to handle parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require in routing JS files
const htmlRoute = require('./app/routing/htmlRoutes.js');
const apiRoute = require('./app/routing/apiRoutes');

app.use('/', htmlRoute);
app.use('/api', apiRoute);

// Starts the server to begin listening
app.listen((process.env.PORT || PORT), function() {
    console.log("App listening on PORT " + PORT);
});
  