app.controller('StoreCtrl', function($scope,etraining) {
    $scope.modules = [];
    console.log('Store ctrl');
    var fun=function(response){
        $scope.modules=response.data;
        console.log($scope.modules);
    };
    etraining.getStoreList(fun);
    
    
})
