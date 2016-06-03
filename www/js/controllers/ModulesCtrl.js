app.controller('ModulesCtrl', function($scope) {
  $scope.modules = JSON.parse(localStorage['modules']);
})
