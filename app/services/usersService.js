socialNetworkApp.factory('usersService', function ($http) {

    var usersService = {};

    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });

    usersService.activeUser;
    
    usersService.addUser = function (user) {
        usersService.usersList.push(user);
    };

    usersService.verifyLogin = function (login) {
        var verifiedUser = null;
        usersService.usersList.forEach(function (user) {
            var currentUserLogin = user.login;
            if (login === currentUserLogin) {
                verifiedUser = user;
            }
        });
        return verifiedUser;
    };

    usersService.verifyUserPassword = function (user, userPassword) {
        return (user.password === userPassword);
    };

    usersService.addNewUserMessage = function(message) {
        usersService.activeUser.messages.push(message);
    };

    return usersService;
});