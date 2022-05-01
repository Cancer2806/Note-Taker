const express = require('express');
const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

const app = express();

// config
const PORT = 3001;
app.use( express.static('public'));

app.use(express.json());


app.use(apiRouter);
app.use(webRouter);




app.listen(PORT, function(){
  console.log(`App is running on http://localhost:${PORT}`);
});

