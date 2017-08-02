const express = require( 'express' ),
  app = express(),
  path = require( 'path' )
  port = 8080;

// views engine
app.set('views', path.join(__dirname, 'views'));

app.get('/', function ( req, res ) {
  res.render( 'index.html' )
});

app.listen( port, function () {
  console.log( 'running on port: ' + port )
})