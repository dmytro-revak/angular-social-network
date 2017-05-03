socialNetworkApp.factory('usersService', function ($http) {

    var usersService = {};

    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });

    usersService.activeUser = {};
    
    usersService.verifyLogin = function (login) {
        var verifiedUser = null;
        for (var i = 0; i < usersService.usersList.length; i++) {
            var currentUser = usersService.usersList[i];
            var currentUserLogin = currentUser.login;
            if (login === currentUserLogin) {
                verifiedUser = currentUser;
                break;
            }
        }
        return verifiedUser;
    };

    usersService.addUser = function (user) {
        usersService.usersList.push(user);
    };

    usersService.verifyUserPassword = function (user, enteredPassword) {
        var userPassword = (user) ? user.password : '';
        return (userPassword === enteredPassword);
    };

    usersService.addNewUserMessage = function(message) {
        usersService.activeUser.messages.push(message);
    };

    usersService.saveUsersListToStorage = function () {
        sessionStorage.setItem('usersList', usersService.usersList);
    };

    usersService.saveActiveUserToStorage = function () {
        sessionStorage.setItem('activeUser', usersService.activeUser);
    };

    usersService.getItemFromStorage = function (item) {
        return sessionStorage.getItem(item);
    };

    return usersService;
});