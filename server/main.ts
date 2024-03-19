require('dotenv').config();
const express = require('express');
const { encounters } = require('../src/test/dummyEncounters.js');



const app = express();
const port = process.env.PORT;

// @ts-ignore
app.get('/encounters', (req, res) => {
  console.log('client hungers. . . FOR ENCOUNTERS');
  res.append('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.send(encounters)
})

app.listen(port, () => {
  console.log(`listening on port ${port}! :)`)
})