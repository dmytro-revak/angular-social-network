socialNetworkApp.controller('userPageController', ['usersService', '$location', function(usersService, $location){
    var vm = this;

    vm.activeUser = usersService.getItemFromStorage('activeUser');

    vm.LogOut = function () {
        usersService.activeUser = {};
        usersService.saveActiveUserToStorage();
        $location.path('/login');
    };

    vm.sendMessage = function(isFormValid) {
        if (isFormValid) {
            debugger
            var newMessage = {
                topic: vm.topic,
                message: vm.message
            };
            usersService.addNewUserMessage(newMessage);
        }
    };

    vm.isAddInfoModalShow = false;

    vm.addUserInfo = function() {
        vm.isAddInfoModalShow = true;
    };

}]);