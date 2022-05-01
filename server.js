// Define required modules
const express = require('express');
const apiRouter = require('./routes/api');
const webRouter = require('./routes/web');


// Configure applications
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware
app.use( express.static('public'));
app.use(express.json());

app.use(apiRouter);
app.use(webRouter);


// Open port
app.listen(PORT, function () {
  console.log(`App is running on http://localhost:${PORT}`);
});
