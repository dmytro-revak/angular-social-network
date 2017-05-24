    socialNetworkApp.controller('registerController', ['$http', '$location', function ($http, $location) {
    
    vm = this;

    vm.isRegistrationFailed = false;

    vm.registerUser = function (isFormValid) {
        debugger;
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
                console.log(resp.data);
                // saveVerifiedUser(verifiedUser);
            });
            // usersService.hasUserSuccessfulRegistered = true;
            // usersService.addUser(vm.newUser);
            // usersService.saveUsersListToStorage();
            // $location.path('/login');
            // vm.newUser = {};
        }
    };

    vm.returnToLogin = function () {
        $location.path('/login');
    };

}]);