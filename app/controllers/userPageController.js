socialNetworkApp.controller('userPageController', ['usersService', '$location', function(usersService, $location){
    var vm = this;

    vm.activeUser = usersService.getActiveUser();

    vm.LogOut = function () {
        vm.activeUser.isActive = false;
        usersService.saveUsersListToStorage();
        $location.path('/login');
    };

    vm.sendMessage = function(isFormValid) {
        if (isFormValid) {
            var newMessage = {
                topic: vm.topic,
                message: vm.message,
                date: new Date()
            };
            debugger
            vm.activeUser.messages.push(newMessage);
            // usersService.addNewUserMessage();
            usersService.saveUsersListToStorage();
            // usersService.saveActiveUserToStorage();
        }
    };

    vm.isAddInfoModalShow = false;

    vm.addUserInfo = function() {
        vm.isAddInfoModalShow = true;
    };

}]);