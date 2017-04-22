var express = require('express');

var port = process.argv[2];
var folder = process.argv[3];

var app = express();
app.set('view engine', 'jade');

app.set('views', folder)

app.get('/home', function(req, res){
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port)