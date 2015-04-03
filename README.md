# aws-lambda-hipchat

A simple Lambda function for pushing notifications to a hipchat room.

```
git clone git@github.com:davemaple/aws-lambda-hipchat.git
cd aws-lambda-hipchat
npm install hipchat-client
```
 
create a config.js file:

```javascript
var config = {};

config.apiAuthToken = 'XXXXXXXXX';
config.roomId = 'Development';
config.from = 'AWS Lambda';

module.exports = config;
```

create a zip for lambda using the following command:
```
zip -r SendHipChatNotification.zip SendHipChatNotification.js config.js node_modules
```

when testing your function you can use a message like this:
```javascript
{
	"message": "<b>test message</b>",
	"message_format": "html",
	"color": "green",
	"notify": true
}
```

<img src="https://davemaple.github.io/assets/images/SendHipChatNotification.png" width="750" height="431" alt="SendHipChatNotification.png" />