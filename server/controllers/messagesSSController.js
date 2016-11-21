//messageSSController.js

console.log("loading messageSSController.js...");


var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var Message = mongoose.model("Message");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");

function messagesController(){
	this.createMessage = function(req,res){
		console.log("id params id:", req.params.id);
		console.log("messageSSController has received:", req.body);
		User.findOne({_id:req.params.id}, function(err,userInfo){
			var newMessage = new Message({text: req.body.text, createdBy: userInfo.username, createdID: userInfo._id});
			newMessage.save(function(err, messageInfo){
				if(err){
					console.log("There was an error:", err);
				}
				else{
					res.json(messageInfo);
				};
			});
		});
	};
	this.getMessages = function(req,res){
		Message.find({},function(err, messageList){
			if(err){
				console.log("There was an error getting messages:", err);
			}
			else{
				res.json(messageList);
			};
		});
	};
	this.getMessages2 = function(req,res){
	Message.find()
	.populate('comments')
	.exec(function(err,messageList){
		if(err){
			console.log("getMessages2 encountered an error:", err);
		}
		else{
			console.log("getMessages2 ran successfully. full list is:", messageList);
			res.json(messageList);
		};
	})};
	this.deleteMessage = function(req,res){
		Message.remove({_id:req.params.id}, function(err,info){
			if(err){
				console.log("error deleting message by id, error is:", err);
			}
			else{
				res.json(info);
			};
		});
	};
	this.addComment = function(req,res){
		Message.findOne({_id:req.body.messageId}, function(err, theMessage){
			var newComment = new Comment({commentText: req.body.text, userId:req.body.userId, _message: req.body.messageId});
			newComment.save(function(err){
				theMessage.comments.push(newComment);
				theMessage.save(function(err, response){
					if(err){
						console.log(err);
					}
					else{
						console.log("Comments save successful. messageSSController received back data and is sending it to client:", response);
						res.json(response);
					};
				});
			});
		});
	};
};

module.exports = new messagesController;
