// Importing the express module
const express = require('express');

// Creating an instance of express
const app = express();

// Using middleware to parse JSON data from incoming requests
app.use(express.json());

// Creating routers for REST API calls and attaching them to the '/v1' endpoint
app.use('/v1', require('./routes')());

// Starting the server and listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});