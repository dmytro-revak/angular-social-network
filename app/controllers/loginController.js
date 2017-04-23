socialNetworkApp.controller('loginController', ['usersService', '$location', function (usersService, $location) {
    var vm = this;

    vm.isLoginCorrect = true;
    vm.isPasswordCorrect = true;

    vm.verifyEnteredParameters = function () {
        var usersList = usersService.usersList;
        for (var i = 0; i < usersList.length; i++) {
            var currentUser = usersList[i];
            vm.isLoginCorrect = (currentUser.login === vm.login);
            if (!vm.isLoginCorrect) {
                vm.isPasswordCorrect = false;
                continue;
            }
            vm.isPasswordCorrect = (currentUser.password === vm.password);
            break;
        }
        return (vm.isLoginCorrect && vm.isPasswordCorrect);
    };

    vm.verifyUser = function () {
        var doesUserOccur = vm.verifyEnteredParameters();
        if (doesUserOccur) {
            $location.path('/userPage');
        }
    };

    vm.registerUser = function () {
        $location.path('/register');
    };

}]);
