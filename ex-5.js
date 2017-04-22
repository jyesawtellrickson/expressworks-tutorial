var express = require('express');

var port = process.argv[2];
var src = process.argv[3];

var app = express();

app.use(require('stylus').middleware(src));

app.use(express.static(src))

app.listen(port);