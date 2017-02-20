var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./public'));

app.use('/', function(req, res){
    res.sendFile(path.resolve('client/index.html'));
});

var port = 3001;

app.listen(port, function(error){
    if(error) throw error;
    console.log("It´s OK!");
});