var express = require('express');
var crypto = require('crypto');

var app = express();

function generateHash(id){
    return crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
}

app.put('/message/:id', function(req, res){
    res.end(generateHash(req.params.id))
});


app.listen(process.argv[2]);