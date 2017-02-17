var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./public'));

app.use('/', function(req, res){
    res.sendFile(path.resolve('client/index.html'));
});

//Dava uns erros louco e tinha que mudar de porta kkkkkkkkk!!
var port = 3003;

app.listen(port, function(error){
    if(error) throw error;
    console.log("It´s OK!");
});