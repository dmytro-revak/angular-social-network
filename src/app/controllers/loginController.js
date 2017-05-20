socialNetworkApp.controller('loginController', ['usersService', function(usersService) {
   vm = this;

   console.log('login');
   console.log(usersService.getUsersList);
   console.log(usersService.getUsersList());

}]);
