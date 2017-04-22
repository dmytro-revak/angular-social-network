socialNetworkApp.factory('usersService', function ($http) {
    var usersService = {};
    $http.get("./users.json").then(function(response) {
        usersService.usersList = response.data;
    });
    return usersService;
});