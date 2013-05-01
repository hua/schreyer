
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

console.log('it worked!');

app.listen(3000);
