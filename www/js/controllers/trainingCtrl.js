app.controller('TrainingCtrl', function($scope, $stateParams) {
	  $scope.modules = JSON.parse(localStorage['modules']);
	  $scope.questions=$scope.modules[0].answers;
	  console.log(21321321);
	  $scope.questionCount=0;
	  $scope.currentQuestion=$scope.questions[$scope.questionCount];
	  console.log($scope.currentQuestion);
	  $scope.next=function(){
	  	$scope.questionCount+=1;
	  	$scope.currentQuestion=	$scope.questions[$scope.questionCount];
	  	console.log($scope.currentQuestion);
	  }
})
