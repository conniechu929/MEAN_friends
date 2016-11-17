app.controller('newController', ['$scope','friendsFactory', '$location', '$filter', function($scope, friendsFactory, $location, $filter) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  //  var index = function(){
        friendsFactory.index(function(returnedData){
          $scope.friends = returnedData.friends;
        });
    // };
  //  index();
    $scope.addFriend = function(){
      friendsFactory.create($scope.newfriend)
      console.log($scope.newfriend)
      $scope.newfriend = {};
      $location.url('/');
    };

    $scope.searchDate = function(filter_date) {
      return $filter('date')(filter_date, 'yyyy-MM-dd');
    }

}]);
