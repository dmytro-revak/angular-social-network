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

    usersService.getActiveUser = function () {
        var activeUser = {};
        usersService.usersList.forEach(function (user) {
            if (user.isActive) {
                activeUser = user;
            }
        });
        return activeUser;
    };

    usersService.saveUsersListToStorage = function () {
        var jsonUsersList = angular.toJson(usersService.usersList);
        localStorage.setItem('usersList', jsonUsersList);
    };

    // usersService.getUsersListFromStorage = function () {
    //     var jsonItem = localStorage.getItem('usersList');
    //     return angular.fromJson(jsonItem);
    // };

    usersService.addNewUserMessage = function(message) {
        if (usersService.activeUser.messages) {
            usersService.activeUser.messages.push(message);
        }
    };

    // usersService.activeUser = usersService.getItemFromStorage('activeUser');

    return usersService;
});