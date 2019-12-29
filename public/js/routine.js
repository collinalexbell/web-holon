var routineApp = angular.module('routineApp', []);

routineApp.controller('GoalListController', function GoalListController($scope, $http) {
  $scope.name = window.location.pathname.replace("/routine/", "")
  $http.get(window.location.pathname + ".json")
  .then(function(response) {
    $scope.goals = response.data.goals
  })
});
