socialNetworkApp.directive('modalWindow', ['usersService', function(usersService){
    return {
        templateUrl: './app/views/modalWindowDirective.html',
        scope: {
            object: '='
        },
        link: function($scope, iElm, iAttrs, controller) {
            var vm = $scope;

            vm.activeUser = usersService.activeUser;

            vm.saveUserInfo = function() {
                vm.activeUser.phone = vm.phone;
                vm.activeUser.country = vm.country;
                vm.activeUser.city = vm.city;
                vm.activeUser.skype = vm.skype;
                vm.activeUser.github = vm.github;
                vm.activeUser.description = vm.description;
            };
        }
    };
}]);