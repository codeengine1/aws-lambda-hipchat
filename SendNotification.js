// dependencies
var config = require('./config');
var HipChatClient = require('hipchat-client');
var hipchat = new HipChatClient(config.apiAuthToken);

exports.handler = (function(event, context) {

	hipchat.api.rooms.message({
		room_id : config.roomId,
		from : config.from,
		message : 'Test message'
	}, function(err, res) {
		if (err) {
			throw err;
		}

		console.log(res);
	});

});