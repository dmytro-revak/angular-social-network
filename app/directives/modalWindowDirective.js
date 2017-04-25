socialNetworkApp.directive('modalWindow', ['usersService', function(usersService){
    return {
        templateUrl: './app/views/modalWindowDirective.html',
        scope: {
            object: '='
        },
        link: function($scope, iElm, iAttrs, controller) {
            var vm = $scope;

            vm.activeUser = usersService.activeUser;

            vm.userPhone = vm.activeUser.phone;
            vm.usercountry = vm.activeUser.country;
            vm.userCity = vm.activeUser.city;
            vm.userSkype = vm.activeUser.skype;
            vm.userGithub = vm.activeUser.github;
            vm.userDescription = vm.activeUser.description; 

            vm.saveUserInfo = function() {
                vm.activeUser.phone = vm.phone;
                vm.activeUser.country = vm.country;
                vm.activeUser.city = vm.city;
                vm.activeUser.skype = vm.skype;
                vm.activeUser.github = vm.github;
                vm.activeUser.description = vm.description;

                vm.$parent.userPage.isAddInfoModalShow = false;
            };

        }
    };
}]);