socialNetworkApp.controller('loginController', ['usersService', '$location', function (usersService, $location) {
    var vm = this;

    vm.verifyEnteredParameters = function () {
        var usersList = usersService.usersList;
        for (var i = 0; i < usersList.length; i++) {
            var isLoginCorrect = (usersList[i].login === vm.login);
            var isPasswordCorrect = (usersList[i].password === vm.password);

            if (isLoginCorrect && isPasswordCorrect) break;
        }
        return (isLoginCorrect && isPasswordCorrect);
    };

    vm.verifyUser = function () {
        var doesUserOccur = vm.verifyEnteredParameters();
        if (doesUserOccur) {
            alert('welcome')
        } else {
            // alert($location.path());
            $location.path('/userPage');
        }
    }
    
}]);