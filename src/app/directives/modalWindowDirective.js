socialNetworkApp.directive('modalWindow', ['usersService', function(usersService){
    return {
        templateUrl: './app/views/modalWindowDirective.html',
        scope: {
            object: '='
        },
        link: function(scope) {
            var vm = scope;

            vm.activeUser = usersService.getActiveUser();

            vm.userPhone = vm.activeUser.phone;
            vm.userCountry = vm.activeUser.country;
            vm.userCity = vm.activeUser.city;
            vm.userSkype = vm.activeUser.skype;
            vm.userGithub = vm.activeUser.github;
            vm.userDescription = vm.activeUser.description; 

            vm.saveUserInfo = function() {
                vm.activeUser.phone = vm.userPhone;
                vm.activeUser.country = vm.userCountry;
                vm.activeUser.city = vm.userCity;
                vm.activeUser.skype = vm.userSkype;
                vm.activeUser.github = vm.userGithub;
                vm.activeUser.description = vm.userDescription;
                usersService.saveUsersListToStorage();
                vm.$parent.userPage.isAddInfoModalShow = false;
            };
        }
    };
}]);