    socialNetworkApp.controller('registerController', ['usersService', '$location', function (usersService, $location) {
    vm = this;

    usersService.hasUserSuccessfulRegistered = false;

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
            messages: [],
            isActive: false
        };

        if (isFormValid) {
            usersService.hasUserSuccessfulRegistered = true;
            usersService.addUser(vm.newUser);
            usersService.saveUsersListToStorage();
            $location.path('/login');
            vm.newUser = {};
        }
    };

    vm.returnToLogin = function () {
        $location.path('/login');
    };

}]);