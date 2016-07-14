var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var app = express();
var users = require('./routes/users');

app.use(bodyParser.json());

//app.use('/users', users(db));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});



