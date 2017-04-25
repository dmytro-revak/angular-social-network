socialNetworkApp.controller('registerController', ['usersService', '$location', function (usersService, $location) {
    vm = this;

    vm.registerUser = function (isFormValid) {
        vm.newUser = {
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
            usersService.addUser(vm.newUser);
            $location.path('/login');
            vm.newUser = {};
        }
    };

    vm.returnToLogin = function () {
        $location.path('/login');
    };

}]);