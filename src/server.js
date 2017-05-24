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

app.post('/userVerification', function(req, res) {
    var userEnteredData = req.body;

    fs.readFile('users.json', function(err, data) {

        var usersList = JSON.parse(data),
            userForVerification = {},
            verificationUserLogin = userEnteredData.login,
            verificationUserPassword = userEnteredData.password,
            isLoginCorrect = verifyLogin(verificationUserLogin, usersList),
            isPasswordCorrect = false;

        if (isLoginCorrect) {
            userForVerification = getUser(verificationUserLogin, usersList);
            isPasswordCorrect = verifyPassword(verificationUserPassword, userForVerification);
        }

        var verifiedUser = (isLoginCorrect && isPasswordCorrect) ? userForVerification : false;

        res.send(verifiedUser);
    });
});

app.post('/userRegistration', function(req, res) {
    var userRegistrationData = req.body;

    fs.readFile('users.json', function(err, data) {

        var usersList = JSON.parse(data),
            userRegistrationLogin = userRegistrationData.login,
            isRegistrationSuccessful = !verifyLogin(userRegistrationLogin, usersList);

        if (isRegistrationSuccessful) {
            usersList.push(req.body);
            var usersListJSON = JSON.stringify(usersList);
            fs.writeFile('users.json', usersListJSON, function(err) {
                if (err) throw err;
            });
        }

        res.send(isRegistrationSuccessful);
    });
});

app.listen(8080, function() {
    console.log("Listen on 8080");
});

function verifyLogin(login, usersList) {
    var doesLoginExist = false;

    for (var i = 0; i < usersList.length; i++) {
        doesLoginExist = (login === usersList[i].login);
        if (doesLoginExist) break;
    }

    return doesLoginExist;
}

function verifyPassword(password, user) {
    return (password === user.password);
}

function getUser(login, usersList) {
    var neededUser = {};
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].login === login) {
            neededUser = usersList[i];
            break;
        }
    }
    return neededUser;
}
