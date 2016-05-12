app.controller('StoreCtrl', function($scope,api) {
    $scope.modules = [];
    console.log('Store ctrl');
    api.getStoreList()
        .then(function(response){
            $scope.modules=response.data;
            console.log($scope.modules);
        });

    
})
