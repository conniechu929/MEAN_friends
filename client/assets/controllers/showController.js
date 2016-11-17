app.controller('showController', ['$scope','friendsFactory', '$location', '$routeParams', function($scope, friendsFactory, $location, $routeParams) {
  friendsFactory.show($routeParams.id, function(returnedData){
    $scope.friend = returnedData;
    console.log($scope.friend);
  });

  $scope.deleteFriend = function() {
    console.log('***DELETING FRIEND***');
    friendsFactory.delete($scope.friend, $routeParams.id);
    $location.url('/');
  }
}]);
