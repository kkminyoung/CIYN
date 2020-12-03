var express = require('express');
var ejs = require('ejs');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();

app.use(express.static(__dirname));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));
app.use(express.static('scss'));
app.use(express.static('vendor'));


app.get('/', function (req, res) {
  fs.readFile('daily-log.html', 'utf8', function (error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

app.get('/', function (req, res) {
  fs.readFile('login.html','utf8', function(error, data){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);

  });
});

/*
app.get('/img',function(req,res){
  fs.readFile('undraw_profile.svg',function(error,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  });
});

*/

app.listen(3000,function(){
  console.log('Server Start localhost:3000 ');
})

/*
var app = http.createServer(function(request,response){
    var url = request.url;
    if(url == '/'){
      url = '/index.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);

*/
/*
var http = require('http');
var fs = require('fs');
var url = require('url');
//var favicon = require('serve-favicon');
var app = http.createServer(function(request,response){
    //var url = request.url;
    if(url == '/'){
      url = '/index.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
*/

/*
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(url == '/'){
      url = '/index.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));

});
app.listen(3000);
*/
