//
// # Kalicos
//
// A simple server to display json data.
//

var http = require('http');
var path = require('path');

var express = require('express');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('*', function(req, res) {
  res.sendfile('./static/index.html'); // load the single view file (react will handle the page changes on the front-end)
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});