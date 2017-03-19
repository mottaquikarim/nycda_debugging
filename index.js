//include express
const express = require('express');

// api routes
const todoApi = require('./apiRoutes');

//create an express application
const app = express();

//app.use('/api',  todoApi);

//have the application listen on a specific port
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
















