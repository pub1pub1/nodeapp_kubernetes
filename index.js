'use strict';

const express = require('express');

const PORT=9090;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node.js v2.0\n');
});

app.listen(PORT, HOST);

