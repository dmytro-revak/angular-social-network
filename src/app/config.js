socialNetworkApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        redirectTo: '/login'
    })
    .when('/userPage', {
        templateUrl : 'app/views/userPage.html',
        controller: 'userPageController',
        controllerAs: 'userPage'
    })
    .when('/login', {
        templateUrl : 'app/views/login.html',
        controller: 'loginController',
        controllerAs: 'login'
    })
    .when('/register', {
        templateUrl : 'app/views/register.html',
        controller: 'registerController',
        controllerAs: 'register'
    })
    .otherwise({
        redirectTo: '/'
    });
});