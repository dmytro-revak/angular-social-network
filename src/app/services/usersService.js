socialNetworkApp.factory('usersService', function ($http) {

    var usersService = {};

    // usersService.saveUsersListToStorage = function () {
    //     localStorage.removeItem('usersList');
    //     var jsonUsersList = angular.toJson(usersService.usersList);
    //     localStorage.setItem('usersList', jsonUsersList);
    // };

    usersService.getActiveUser = function () {
        var activeUser = localStorage.getItem('activeUser');
        return angular.fromJson(activeUser);
    };

    usersService.getUsersList = function () {
        $http.get('/getUsersList').then(function (response) {
            usersService.usersList = response.data;
            debugger
        });
    };

    // usersService.usersList = usersService.getUsersListFromStorage() || usersService.getUsersListWithAjax();

    // usersService.verifyLogin = function (login) {
    //     var verifiedUser = null;
    //     for (var i = 0; i < usersService.usersList.length; i++) {
    //         var currentUser = usersService.usersList[i];
    //         var currentUserLogin = currentUser.login;
    //         if (login === currentUserLogin) {
    //             verifiedUser = currentUser;
    //             break;
    //         }
    //     }
    //     return verifiedUser;
    // };

    // usersService.verifyUserPassword = function (user, enteredPassword) {
    //     var userPassword = (user) ? user.password : '';
    //     return (userPassword === enteredPassword);
    // };

    // usersService.hasUserSuccessfulRegistered = false;

    // usersService.addUser = function (user) {
    //     usersService.usersList.push(user);
    // };

    // usersService.getActiveUser = function () {
    //     var activeUser = {};
    //     usersService.usersList.forEach(function (user) {
    //         if (user.isActive) {
    //             activeUser = user;
    //         }
    //     });
    //     return activeUser;
    // };




















    return usersService;
});