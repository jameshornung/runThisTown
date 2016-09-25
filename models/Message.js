var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MessageSchema = new Schema({
	event: {
		type: String
	},
	date: {
		type: Date
	},
	description: {
		type: String
	},
	username: {
		type: String
	}
	
}, { collection:'messages'});

var Message = mongoose.model('message', MessageSchema);

module.exports = Message;