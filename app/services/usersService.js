socialNetworkApp.factory('usersService', function ($http) {

    var usersService = {};

    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });

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

    usersService.verifyUserPassword = function (user, enteredPassword) {
        var userPassword = (user) ? user.password : '';
        return (userPassword === enteredPassword);
    };

    usersService.hasUserSuccessfulRegistered = false;

    usersService.addUser = function (user) {
        usersService.usersList.push(user);
    };

    usersService.saveUsersListToStorage = function () {
        var jsonUsersList = angular.toJson(usersService.usersList);
        localStorage.setItem('usersList', jsonUsersList);
    };

    usersService.saveActiveUserToStorage = function () {
        var jsonActiveUser = angular.toJson(usersService.activeUser);
        localStorage.setItem('activeUser', jsonActiveUser);
    };

    usersService.getItemFromStorage = function (item) {
        var jsonItem = localStorage.getItem(item);
        return angular.fromJson(jsonItem);
    };

    usersService.addNewUserMessage = function(message) {
        debugger
        if (usersService.activeUser.messages) {
            usersService.activeUser.messages.push(message);
        }
    };

    usersService.activeUser = usersService.getItemFromStorage('activeUser');

    return usersService;
});