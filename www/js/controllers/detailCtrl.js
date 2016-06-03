app.controller('DetailCtrl', function($scope, $stateParams,api) {
    console.log('Store ctrl');
    $scope.module = {};
    $scope.purchase = function(){
    	console.log('purchase');
    	console.log($scope.module.apm_id);
    	api.getQuestions($scope.module.apm_id)
    	.then(function(response){
    		$scope.module.answers=response.data.data;
    		localStorage['modules']=JSON.stringify([$scope.module]);
    		console.log(localStorage['modules']);
    	});
    };
    api.getDetail($stateParams.apm_id)
        .then(function(response){
            $scope.module=response.data.data;
            console.log($scope.module);
        });
})