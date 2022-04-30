// Required Modules
const express = require('express');
const apiRouter = require('./routes/api');
const webRouter = require('./routes/web');


// configure
const app = express();
const PORT = 3001; // Change to Heroku required format when ready to deploy


// Middleware
app.use(express.static('public'));
app.use(express.json());

app.use(webRouter);
app.use(apiRouter);


// open port
app.listen(PORT, function () {
  console.log(`Server is currently running on http://localhost:${PORT}`);
});