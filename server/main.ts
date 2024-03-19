// require('dotenv').config({path: '../.env'});
require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}! :)`);
})