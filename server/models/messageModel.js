//messageModel.js

console.log("loading MongoDB 'Message' model...");
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var schema = mongoose.Schema 

var MessageSchema = new mongoose.Schema({
	text:{
		type:String,
		required:[true, "a message is required"], 
		minlength: [10, "Your message must be at least 10 characters long."]
	},
	createdBy: String,
	createdId: String,
	comments:[{type:schema.Types.ObjectId, ref:"Comment"}]
},{timestamps:true});

var Message = mongoose.model("Message", MessageSchema);

var CommentSchema = new mongoose.Schema