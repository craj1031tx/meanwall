//appFactory.js

wallApp.factory("appFactory", ["$http", "$cookies", function($http, $cookies){
	console.log("appFactory loaded");
	function factoryMethods(){
		this.login = function(userData, callback){
			console.log("start of factory login method")
			$http.post("/login_user", userData).then(function(returnedData){
				$cookies.put("currentlyLoggedIn", returnedData.data._id);
				console.log("cookie is set to:", $cookies.get("currentlyLoggedIn"));
				callback(returnedData.data);
			});
		};
		this.logout = function(){
			console.log("factory logout method triggered");
			$cookies.remove("currentlyLoggedIn");
		};
		this.postMessage = function(messageData, callback){
			console.log("Factory post message has received:", messageData);
			$http.post(("/post_message/"+$cookies.get("currentlyLoggedIn")), messageData).then(function(returnedData){
				//do something....
			})
		};
		this.getMessages = function(callback){
			$http.get("/get_messages").then(function(returnedData){
				callback(returnedData);
			})
		};
		this.deleteMessage = function(messageId, callback){
			$http.get("/delete_message/"+messageId).then(function(returnedData){
				callback(returnedData);
			});
		};
		this.addComment = function(newComment, callback){
			$http.post("/add_comment", newComment).then(function(returnedData){
				callback(returnedData);
			})
		}
	};
	return new factoryMethods();
}]);