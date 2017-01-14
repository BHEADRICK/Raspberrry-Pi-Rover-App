angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.left= 0;
  $scope.right=0;
    $scope.address =  'http://192.168.1.82:8081';
    $scope.reset = function(){
// $scope.right = 0;
// $scope.left= 0;
    };

    $scope.changeDirectionLeft = function(val){
      $scope.left = val;
        $scope.changeDirection();
    };
    $scope.changeDirectionRight = function(val){
      $scope.right = val;
        $scope.changeDirection();
    };
$scope.changeDirection = function(){
  //$scope.$apply();

        console.log($scope);
        var url = $scope.address+'/'+ $scope.left + '/' + $scope.right;

        console.log(url);


  $http.get(url).then(function(resp){
    console.log(resp)
  });
}
})

