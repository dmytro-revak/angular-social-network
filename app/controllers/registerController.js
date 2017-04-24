socialNetworkApp.controller('registerController', ['usersService', '$location', function (usersService, $location) {
    vm = this;

    vm.registerUser = function (isFormValid) {
        if (isFormValid) {
            usersService.addUser(vm.newUser);
            $location.path('/login');
            vm.newUser = {};
        }
    };

    console.log(usersService.activeUser);

    vm.returnToLogin = function () {
        $location.path('/login');
    };

}]);