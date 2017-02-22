var express = require('express');
var path = require('path');
var mongo = require('mongodb');
var routes = require('./routes/index');
var app = express();

/*var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/url-shortener';*/
var url = "mongodb://admin:1qaz2wsx3edc@ds157469.mlab.com:57469/ib-projects"
mongo.MongoClient.connect(url, function (err, db) {
  
  if (err) throw new Error('Database failed to connect!');
  else console.log('Connection established to', url);
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

/*  db.createCollection("urls");*/
  
  routes(app, db);
  
  
  var port = process.env.PORT || 8080;
  app.listen(port, function() {
    console.log("App now running on port", port);
  });
  

});