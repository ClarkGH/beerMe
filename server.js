const express = require('express'),
  path = require('path'),
  app = express(),
  port = 8080;

//view path
app.set('views', path.join(__dirname, '/views'));

//static file path
app.use(express.static(path.join(__dirname, 'public')));

//ejs templating
app.set('view engine', 'ejs');

//homepage
app.get('/', function (req, res) {
  res.render('index');
});

//404 error handling
//code here

app.listen(port);
console.log('Server is running on port: ' + port);