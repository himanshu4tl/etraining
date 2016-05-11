app.factory('loader',function(){
		return {
			startLoader:function(){
				console.log('start');
			},
			stopLoader:function(){
				console.log('stop');

			},
		};
});