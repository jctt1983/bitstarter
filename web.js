var express = require('express');
var fs = requre('fs');

var getStringFromIndexFile = function(filename){
    var buffer = fs.readFileSync(filename);
    return buffer.toString();
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var message = getStringFromIndexFile('index.html');
    response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
