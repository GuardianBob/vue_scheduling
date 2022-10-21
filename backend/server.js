'use strict';
require('dotenv').config();
const fs = require('fs-extra');
const express = require('express');
const { Sequelize, and } = require('sequelize');
const cors = require('cors');
const https = require('https');
const path = require('path');
const os = require('os');

const port = process.env.PORT;
console.log(port);
const app = express();
const bodyParser = require('body-parser');

var corsOptions = {
  exposedHeaders: ['refresh-token'],
  origin: '*',
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Access-Control',
    'Authorization',
    'Cache-Control',
    'Content-Language',
    'Expires',
    'Last-Modified',
    'Pragma',
    'x-Access-Token',
  ],
  crossdomain: true,
  // credentials: true
};

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// PLEASE try to keep routs in alphabetical order so they are easier to sort through.

// require('./app/routes/admin.routes')(app);
// require('./app/routes/auth.routes')(app);

// const db = require('./app/models');

app.get('/', (req, res) => {
  res.send("Hey look!  It's a backend!");
});


// server.listen(port, () => {
  //   console.log(`app listening at ` + process.env.DOMAIN + `:${port}`);
// });
if (process.env.HTTPS == "true") {
  let credentials = {
    key: fs.readFileSync(SSLKEY.toString()),
    cert: fs.readFileSync(SSLCERT.toString()),
  };
  const server = https.createServer(credentials, app);
} else {
  const server = app.listen(port, function () {
    // Starting the Server at the port 3000
    let host = server.address().address
    let port = server.address().port
  })
}

console.log(`app listening at ` + process.env.DOMAIN + `:${port}`);