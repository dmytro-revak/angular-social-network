socialNetworkApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/login'
    })
    .when('userPage', {
        templateUrl : 'app/views/userPage.html'
    })
    .when('/login', {
        templateUrl : 'app/views/login.html'
    });
});