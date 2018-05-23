
var express = require('express');
var path = require('path');

var app = express();


app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
})

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server listening at http://%s:%s", host, port);
})
