//commentModel.js

console.log("loading MongoDB 'Message' model...");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var schema = mongoose.Schema; 

var CommentSchema = new mongoose.Schema({
	_message: {type: schema.Types.ObjectId, ref: "Message"},
	commentText: {type: String, required: [true, "Comment field cannot be blank."], minlength:[10,"Your comment must be longer than 10 characters"]},
	userId: String
},{timestamps:true});

var Comment = mongoose.model("Comment", CommentSchema);

var CommentSchema = new mongoose.Schema
