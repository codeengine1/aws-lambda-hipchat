# aws-lambda-hipchat

A simple Lambda function for pushing notifications to a hipchat room.

<code>
<pre>
npm install hipchat-client
</pre>
</code>
 
create a config.js file:

<code>
<pre>
var config = {};

config.apiAuthToken = 'XXXXXXXXX';
config.roomId = 'Development';
config.from = 'AWS Lambda';

module.exports = config;
</pre>
</code>