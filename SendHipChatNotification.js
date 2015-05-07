// dependencies
var config = require('./config');
var HipChatClient = require('hipchat-client');
var hipchat = new HipChatClient(config.apiAuthToken);

exports.handler = (function(event, context) {
	
	// validate event
	if (!event.message) {
		throw 'message is required!';
	}
	
	// creation message and options
	var msg = {
		room_id : config.roomId,
		from : config.from,
		message : event.message
	};
	
	if (event.message_format) {
		msg.message_format = event.message_format;
	}
	
	if (event.notify) {
		msg.notify = event.notify;
	}
	
	if (event.color) {
		msg.color = event.color;
	}
	
	// send message
	hipchat.api.rooms.message(msg, function(err, res) {
		if (err) {
			throw err;
		}

		console.log(res);

	  context.done(null, "Message Sent.");
	});
});
