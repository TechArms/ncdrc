var express = require('express');
// var http = require('http');

var app = express();
app.use(express.static(__dirname + '/client', {maxAge: 2592000}))

var router = express.Router({
    caseSensitive: true,
    strict: true
})

router.use(function(req, res, next) {
	console.log(req.url)
	res.sendfile(__dirname + '/client/index.html');
	next();
})

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

require('./server/routes')(app);

app.get('*', function(req, res) {
	// console.log(req.url)
    res.sendFile(__dirname + '/client/index.html');	
})

// app.get('/home', function(req, res) {
//     res.send("<h1>{{title}}</h1>");
// })


app.listen(process.env.PORT || 8000, function() {
    console.log("Server started....")

});
