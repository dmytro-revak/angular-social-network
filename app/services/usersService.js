socialNetworkApp.factory('usersService', function ($http) {
    var usersService = {};

    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });

    usersService.addUser = function (user) {
        usersService.usersList.push(user);
    };

    return usersService;
});