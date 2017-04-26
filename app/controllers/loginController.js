socialNetworkApp.controller('loginController', ['usersService', '$location', function (usersService, $location) {
    var vm = this;

    vm.isLoginCorrect = true;
    vm.isPasswordCorrect = true;


    vm.verifyUser = function () {
        debugger
        vm.verifiedUser = usersService.verifyLogin(vm.login);
        vm.isVerificationCorrect = usersService.verifyUserPassword(vm.verifiedUser, vm.password);
        if (vm.isVerificationCorrect) {
            $location.path('/userPage');
        }
    };

}]);
