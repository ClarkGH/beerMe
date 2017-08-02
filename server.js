'use strict';

const express = require( 'express' ),
  app = express(),
  path = require( 'path' ),
  VIEWS = path.join(__dirname, 'views'),
  port = 8080;

// views engine
app.get('/', function ( req, res ) {
  res.sendFile( 'index.html', { root : VIEWS } );
});

app.listen( port, function () {
  console.log( 'running on port: ' + port );
})