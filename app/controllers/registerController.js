socialNetworkApp.controller('registerController', ['usersService', '$location', function (usersService, $location) {
    vm = this;

    vm.registerUser = function () {
        usersService.addUser(vm.newUser);
        vm.newUser = {};
    };

    vm.returnToLogin = function () {
        $location.path('/login');
    };

        // myForm.firstName.$valid

}]);