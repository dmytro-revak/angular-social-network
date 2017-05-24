socialNetworkApp.controller('loginController', ['$http', '$location', 'usersService', function($http, $location, usersService) {
   
    vm = this;

    vm.isVerificationFailed = false;
    vm.hasUserSuccessfulRegistered = usersService.hasUserSuccessfulRegistered;

    vm.verifyUser = function(isFormValid) {

        if (isFormValid) {

            var user = {
                login: vm.login,
                password: vm.password
            };

            $http.post('/userVerification', user).then(function (resp) {
                var verifiedUser = resp.data;
                saveVerifiedUser(verifiedUser);
            });

        }
    };

    vm.registerUser = function() {
        $location.path('/register');
    };

    function saveVerifiedUser(user) {
        if (user) {
            localStorage.setItem('verifiedUser', user);
            vm.isVerificationFailed = false;
            $location.path('/userPage');
        } else {
            showErrorMessage();
        }
    }

    function showErrorMessage() {
        vm.isVerificationFailed = true;
    }

}]);
