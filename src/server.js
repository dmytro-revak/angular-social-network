var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    fs = require('fs');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/assets', express.static(__dirname + '/assets'));
app.use('/app', express.static(__dirname + '/app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/getUsersList', function(req, res) {
    fs.readFile('users.json', function(err, data) {
        var usersList = JSON.parse(data);
        console.log(usersList);
        res.send(usersList);
    });
});

app.post('/userVerification', function(req, res) {
    var userForVerification = req.body,
        verifiedUser = null;

    fs.readFile('users.json', function(err, data) {
        var usersList = JSON.parse(data);
        
        usersList.forEach(function(currentUser) {    
            var isLoginCorrect = userForVerification.login === currentUser.login,
                isPasswordCorrect = userForVerification.password === currentUser.password;
            if (isLoginCorrect && isPasswordCorrect) {
                verifiedUser = currentUser;
            }
        });

        res.send(verifiedUser);
    })
    
})

app.listen(8080, function() {
    console.log("Listen on p 8080");
});