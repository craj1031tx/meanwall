//userSSController.js

console.log("loading usersSSController.js...")

var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var User = mongoose.model("User");

function usersController(){
	this.loginUser = function(req,res){
		console.log("body data:", req.body);
		User.findOne({username:req.body.username}, function(err,returnedData){
			if(!returnedData){
				var newUser = new User({username: req.body.username});
				newUser.save(function(err,userData){
					if(err){
						console.log("SOMETHING WENT WRONG", err);
					}
					else{
						console.log("FIRSTPART:",userData);
						res.json(userData);
					};
				});
			}
			else{
				console.log("user already exists....", returnedData);
				res.json(returnedData);
			};
		});
	};
};

module.exports = new usersController;