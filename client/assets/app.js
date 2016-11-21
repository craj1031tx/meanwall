//app.js

var wallApp = angular.module("wallApp", ["ngRoute", "ngCookies"]);

wallApp.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"partials/login.html",
		controller: "loginController"
	})
	.when("/wall",{
		templateUrl:"partials/wall.html",
		controller: "wallController"
	})
	.otherwise({redirectTo:"/wall"});
})

