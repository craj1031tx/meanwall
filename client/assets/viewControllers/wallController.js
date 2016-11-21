//server.js

wallApp.controller("wallController", ["$scope", "appFactory", "$location", "$routeParams", "$cookies", function($scope, appFactory, $location, $routeParams, $cookies){
		console.log("Now in the wallController...");
		$scope.currentUser = $cookies.get("currentlyLoggedIn");
		function checkUser(){
			if(!$scope.currentUser){
				$location.url("/login");
			}
		};
		var getMessages = function(){
			appFactory.getMessages(function(returnData){
				$scope.messageList = returnData.data;
				console.log($scope.messageList);
			});
		};
		getMessages();

		$scope.logout = function(){
			appFactory.logout();
			$location.url('/');
		};	

		$scope.postMessage = function(){
			appFactory.postMessage($scope.newMessage, function(response){
				console.log(response);
			});
			$location.url('/');
		};
		$scope.deleteMessage = function(messageId){
			appFactory.deleteMessage(messageId, function(response){
				console.log("wallController callback print response:", response);
			});
			getMessages();
		};
		$scope.addComment = function(newCommentObject, messageId){
			newCommentObject.messageId = messageId;
			newCommentObject.userId = $scope.currentUser;
			appFactory.addComment(newCommentObject, function(response){
				console.log("addComment callback response is:", response);
			});
		};
}]);

