app.factory('etraining',function($http){
//    /http://localhost/pro/pro/etraining/web/api/site/store
    
    var etraining={
        post:function(url,data,fun){
            url=app.config.url+url;
            $http({
					method: 'POST',
					url: url,
					data: data,
					headers: {'Content-Type': undefined}
				})
				.then(fun);
        },
        get:function(url,fun){
            url=app.config.url+url;
            console.log(url);
            $http.get(url)
				.then(fun);
        },
        getStoreList:function(fun){
            this.get('site/store',fun); 
        },
        getDetail:function(id,fun){
            this.get('site/module?id='+id,fun); 
        },
        
    };
    return etraining;
});