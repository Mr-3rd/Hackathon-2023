require('dotenv').config()

const accountSID = process.env.auth
const authToken = process.env.pass

var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC0fe7c91e03c2869ab329570de321a242', '016cfa74d1a8cea39e7c3cead67011ab');

// Send the text message.
client.messages.create({
    to: 6123676504,
    from: 8778501001,
    body: 'Hello from Twilio!'
});