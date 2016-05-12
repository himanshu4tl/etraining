app.controller('DetailCtrl', function($scope, $stateParams,api) {
    $scope.module = {};
    console.log('Store ctrl');
    api.getDetail($stateParams.apm_id)
        .then(function(response){
            $scope.module=response.data.data;
            console.log($scope.module);
        });
})