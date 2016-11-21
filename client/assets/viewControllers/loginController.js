//server.js

wallApp.controller("loginController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
		if($cookies.get("currentlyLoggedIn")){
			$location.url("/wall");
		}
		console.log("Now in the loginController...");
		$scope.login=function(){
			console.log($scope.loginObject);
			appFactory.login($scope.loginObject, function(res){
				console.log("res is", res);
			});
			$location.url('/wall');
		};
		$scope.checkCookie = function(){
			console.log($cookies.get("currentlyLoggedIn"));
		}
}]);