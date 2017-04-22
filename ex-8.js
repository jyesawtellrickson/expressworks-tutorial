var express = require("express");
var fs = require("fs");

var app = express();
var fname = process.argv[3];

app.get('/books', function(req,res){
    fs.readFile(fname, function (err, data){
        if (err) return console.error(err);
        try {
            var books = JSON.parse(data);
        } catch(e){
            res.sendStatus(500);
        }
        res.json(books);
    });
});


app.listen(process.argv[2]);