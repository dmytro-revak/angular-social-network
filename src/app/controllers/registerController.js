    socialNetworkApp.controller('registerController', ['$http', '$location', 'usersService', function ($http, $location, usersService) {
    
    vm = this;

    vm.isRegistrationFailed = false;

    vm.registerUser = function (isFormValid) {

        var newUser = {
            login: vm.login,
            password: vm.password,
            firstName: vm.firstName,
            lastName: vm.lastName,
            phone: '',
            country: '',
            city: '',
            skype: '',
            github: '',
            description: '',
            messages: []
        };

        if (isFormValid) {
            $http.post('/userRegistration', newUser).then(function (resp) {
                finishRegistration(resp.data);
            });
        }
    };

    vm.returnToLogin = function () {
        usersService.hasUserSuccessfulRegistered = false;
        $location.path('/login');
    };

    function finishRegistration(respAnswer) {
        if (respAnswer) {
            usersService.hasUserSuccessfulRegistered = true;
            vm.isRegistrationFailed = false;
            $location.path('/login');
        } else {
            usersService.hasUserSuccessfulRegistered = false;
            vm.isRegistrationFailed = true;
        }
    }

}]);