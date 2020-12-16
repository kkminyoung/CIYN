var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname));
app.use(express.static('css'));
app.use(express.static('img'));
app.use(express.static('js'));
app.use(express.static('scss'));
app.use(express.static('vendor'));

app.get('/', function (req, res) {
  fs.readFile('index.html', 'utf8', function (error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

app.listen(3000,function(){
  console.log('Server Start localhost:3000 ');
})
