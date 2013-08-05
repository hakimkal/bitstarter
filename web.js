var fs = require('fs');
resp = fs.readFileSync("index.html");
buf = new Buffer(resp) ;
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
