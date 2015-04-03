# aws-lambda-hipchat

A simple Lambda function for pushing notifications to a hipchat room.

```
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