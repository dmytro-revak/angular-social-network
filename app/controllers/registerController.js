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


        if ( isFormValid && !vm.verificationDoesUserOccur() ) {
            usersService.addUser(vm.newUser);
            usersService.saveUsersListToStorage();
            $location.path('/login');
            vm.newUser = {};
        }
    };

    vm.verificationDoesUserOccur = function () {
        var doesUserOccur = usersService.verifyLogin(vm.login);
        if (doesUserOccur) {
            debugger
        }
        return doesUserOccur;
    };
            registerForm.firstName.$setValidity(false);

    vm.returnToLogin = function () {
        $location.path('/login');
    };

}]);