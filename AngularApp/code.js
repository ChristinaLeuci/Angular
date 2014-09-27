var data = angular.module("data", []);
data.controller("controller1", ["$scope", function($scope){
  $scope.list = [1, 2, 3];

  $scope.additem = function(){
    $scope.list.push($scope.newitem);
    $scope.newitem = "";
  };
}]);