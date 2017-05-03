socialNetworkApp.controller('loginController', ['usersService', '$location', function (usersService, $location) {
    var vm = this;

    vm.isLoginCorrect = true;
    vm.isPasswordCorrect = true;

    vm.verifyUser = function () {
        vm.verifiedUser = usersService.verifyLogin(vm.login);
        vm.isLoginCorrect = Boolean(vm.verifiedUser);
        vm.isVerificationCorrect = usersService.verifyUserPassword(vm.verifiedUser, vm.password);
        vm.isPasswordCorrect = Boolean(vm.isVerificationCorrect);
        if (vm.isVerificationCorrect) {
            $location.path('/userPage');
        }
    };

    vm.registerUser = function () {
        $location.path('/register');
    }

}]);
