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

config.apiAuthToken = 'a5c701eab4a0eacfec50f6e8a89964';
config.roomId = 'Development';
config.from = 'AWS Lambda';

module.exports = config;
</pre>
</code>