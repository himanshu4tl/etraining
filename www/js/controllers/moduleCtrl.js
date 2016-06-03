app.controller('ModuleCtrl', function($scope, $stateParams) {
	  /*$scope.modules = JSON.parse(localStorage['modules']);
	  $scope.answers=$scope.modules[0].answers;
	  console.log($scope.answers);
	  console.log(321321);*/
	  $scope.modules = JSON.parse(localStorage['modules']);
	  $scope.module=$scope.modules[0];
	  console.log($scope.module);
})
