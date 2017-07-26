const express = require('express'),
  app = express(),
  path = require('path');

app.get('/', function(req, res) {
  res.send('GET req to homepage')
});

app.listen(8080);