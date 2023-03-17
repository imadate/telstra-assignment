// Importing required modules
const express = require('express');

// Creating the router
const routes = express.Router({ mergeParams: true });

// Creating routes for REST API calls
routes.use('/transformPayload', require('./transform')());

// Exporting the router
module.exports = () => {
  return routes;
};