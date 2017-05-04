socialNetworkApp.controller('userPageController', ['usersService', '$location', function(usersService, $location){
    var vm = this;

    vm.activeUser = usersService.getItemFromStorage('activeUser');

    vm.LogOut = function () {
        usersService.activeUser = {};
        usersService.saveActiveUserToStorage();
        $location.path('/login');
    };

    vm.sendtheMessage = function() {
        vm.newMessage = {
            topic: vm.topic,
            message: vm.message
        }
        usersService.addNewUserMessage(vm.newMessage);
    };

    vm.isAddInfoModalShow = false;

    vm.addUserInfo = function() {
        vm.isAddInfoModalShow = true;
    };

}]);