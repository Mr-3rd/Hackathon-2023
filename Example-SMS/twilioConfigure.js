// Copy code block
// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACec9ea0bed205257a58c85c765e02df6f";
const authToken = '0efe6b7e55eba04aefed16b88633977d';
const client = require("twilio")(accountSid, authToken);
client.messages
    .create({ body: "Hello from Twilio", from: "+18778501001", to: "+16123676504" })
    .then(message => console.log(message.sid));