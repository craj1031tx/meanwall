//userModel.js

console.log("loading MongoDB 'User' model...");
var bcrypt = require("bcrypt-nodejs");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
	username: {type: String, required:[true,"a username is required"]}
});

var User = mongoose.model("User", UserSchema);