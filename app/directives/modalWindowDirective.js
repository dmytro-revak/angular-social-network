socialNetworkApp.directive('modalWindow', ['usersService', function(usersService){
    return {
        templateUrl: './app/views/modalWindowDirective.html',
        scope: {
            object: '='
        },
        link: function($scope, iElm, iAttrs, controller) {

            $scope.name = 'adad';  
        }
    };
}]);