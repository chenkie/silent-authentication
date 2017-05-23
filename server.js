const express = require('express');
const app = express();
const jwt = require('express-jwt');
const cors = require('cors');
const staticFile = require('connect-static-file');
const path = require('path');
require('dotenv').config();

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file'
}

app.use(cors());

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.use('/silent', staticFile(`${__dirname}/silent.html`));

app.listen(process.env.PORT || 8080);
console.log('Listening!');