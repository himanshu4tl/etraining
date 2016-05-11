app.controller('DetailCtrl', function($scope, $stateParams,etraining) {
    $scope.module = {};
    console.log('Store ctrl');
    var fun=function(response){
        $scope.module=response.data.data;
        console.log($scope.module);
    };
    etraining.getDetail($stateParams.apm_id,fun);
})