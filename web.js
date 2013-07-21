var express = require('express');
var fs = require('fs');

var getStringFromIndexFile = function(filename){
    var buffer = fs.readFileSync(filename);
    return buffer.toString();
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var message = getStringFromIndexFile('index.html');
    response.send(message);
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
