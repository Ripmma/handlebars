var mongoose = require("mongoose");

var User = new mongoose.Schema({
	user:String, 
	password:String
});

module.exports = mongoose.model("User", User);