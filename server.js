var express = require('express');
var path = require('path');
/*var mongo = require('mongodb'); */
var routes = require('./routes/index.js');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/url-shortener';
mongo.MongoClient.connect(url, function (err, db) {
  
  if (err) throw new Error('Database failed to connect!');
  
  console.log('Connection established to', url);
  routes(app, db);*/
  routes(app);

  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    console.log("App now running on port", port);
  });

/*});*/