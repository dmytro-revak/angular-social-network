var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs');

var app = express();

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/app', express.static(__dirname + '/app'));
// app.use(express.static(__dirname + '/public'));
// app.use(app.router);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(8080, function() {
    console.log("Listen on port 8080");
});