//routes.js

console.log("loading routes.js...");

var usersSSController = require("../controllers/usersSSController.js");
var messagesSSController = require("../controllers/messagesSSController.js");
var commentsSSController = require("../controllers/commentsSSController.js");

module.exports = function(app){
	app.post("/login_user", usersSSController.loginUser);
	app.post("/post_message/:id", messagesSSController.createMessage);
	app.get("/get_messages", messagesSSController.getMessages2);
	app.get("/delete_message/:id", messagesSSController.deleteMessage);
	app.post("/add_comment", messagesSSController.addComment);
}