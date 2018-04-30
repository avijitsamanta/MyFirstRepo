const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

var mongoose = require('mongoose');

var Task = require('./api/models/todoListModel');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoute');

routes(app);


app.listen(port,function(){

	console.log("server running");
})

app.get('/',function(req,res){
	res.send("Hello Node Demo");
});
