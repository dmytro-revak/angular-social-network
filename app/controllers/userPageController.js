socialNetworkApp.controller('userPageController', ['usersService', function(usersService){
    var vm = this;

    vm.activeUser = usersService.getItemFromStorage('activeUser');

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