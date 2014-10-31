var http = require('http');
var connect = require('connect');
var connect = require('serve-static');
var morgan = require('morgan');

var port = process.env.PORT || 5050;

var app = connect();

app.use(morgan('dev'));
app.use(serveStatic(__dirname + 'public'));

http.createServer(app).listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Directory: ' + directory);
});
