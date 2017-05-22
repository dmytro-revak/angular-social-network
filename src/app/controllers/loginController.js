socialNetworkApp.controller('loginController', ['$http', '$location', function($http, $location) {
   
    vm = this;

    vm.isVerificationFailed = false;

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
