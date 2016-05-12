app.factory('helper',function($ionicLoading){
    return {
        startLoader:function(){
            $ionicLoading.show({
                content: 'Loading',
                showBackdrop: false
            }); 
        },
        stopLoader:function(){
            $ionicLoading.hide(); 
        },
        
    };
}).factory('webService',function($http,$q,helper){
//    /http://localhost/pro/pro/etraining/web/api/site/store
    
    var webService={
        post:function(url,data){
            var deferred = $q.defer();
            url=app.config.url+url;
            helper.startLoader();
            $http({
					method: 'POST',
					url: url,
					data: data,
					headers: {'Content-Type': undefined}
				})
				.then(function(response){
                        deferred.resolve(response);    
                        helper.stopLoader();
                });
          return deferred.promise;
        },
        get:function(url){
            url=app.config.url+url;
            console.log(url);
            var deferred = $q.defer();
            helper.startLoader();
            $http.get(url)
				.then(function(response){
                    deferred.resolve(response);    
                    helper.stopLoader();
                });
          return deferred.promise;
        
        }
        
    };
    return webService;
}).factory('api',function($http,webService){
    var etraining={
        getStoreList:function(){
            return webService.get('site/store'); 
        },
        getDetail:function(id){
            return webService.get('site/module?id='+id); 
        },
        
    };
    return etraining;
});