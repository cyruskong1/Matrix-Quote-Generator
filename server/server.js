import express from 'express';

var app = express();

var port = 3000;

app.use(express.static(__dirname + '/'));

app.listen(function (req, res) {
  console.log('Hi Cy, working on the Matrix on port: ' + port)
})

app.get('/', function (req, res) {
  res.sendFile('index.html')
})