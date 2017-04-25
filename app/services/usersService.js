socialNetworkApp.factory('usersService', function ($http) {
    var usersService = {};

    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });

    usersService.activeUser;
    
    usersService.addUser = function (user) {
        usersService.usersList.push(user);
    };

    usersService.addNewUserMessage = function(message) {
        usersService.activeUser.messages.push(message);
    }

    return usersService;
});