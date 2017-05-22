socialNetworkApp.controller('loginController', ['usersService', '$http', function(usersService, $http) {
   
    vm = this;

    vm.verifyUser = function(isFormValid) {

        if (isFormValid) {
            
            var user = {
                login: vm.login,
                password: vm.password
            };

            $http.post('/userVerification', user).then(function (resp) {
                vm.verifiedUser = resp.data;
            });

        }
    };


}]);
