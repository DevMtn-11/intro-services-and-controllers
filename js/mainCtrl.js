angular.module('foodApp', [])

  .controller('mainCtrl', function($scope, $log, foodService) {
    // $log('Hey, this is a log');

    $scope.name = 'Joe';

    $scope.$watch('name', function() {
      $scope.name2 = $scope.name + '2';
    });

    $scope.name3 = foodService.name;
    $scope.name4 = foodService.myName;

});
