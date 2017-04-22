socialNetworkApp.controller('loginController', ['usersService', '$location', function (usersService, $location) {
    var vm = this;

    vm.verifyEnteredParameters = function () {
        var usersList = usersService.usersList;
        for (var i = 0; i < usersList.length; i++) {
            var currentUser = usersList[i];
            vm.isLoginIncorrect = (currentUser.login !== vm.login);
            if (vm.isLoginIncorrect) {
                vm.isPasswordIncorrect = true;
                break;
            }
            vm.isPasswordIncorrect = (currentUser.password !== vm.password);
        }
        return (vm.isLoginIncorrect || vm.isPasswordIncorrect);
    };

    vm.verifyUser = function () {
        var doesUserOccur = !vm.verifyEnteredParameters();
        if (doesUserOccur) {
            $location.path('/userPage');
        }
    };
}]);