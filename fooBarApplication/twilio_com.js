// Twilio Credentials 
var accountSid = 'AC671a65ea901c36f62241c6ef3709675b'; 
var authToken = '566625eae9c18ec33611edb1154dc47b'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
/*client.messages.create({ 
	to: "7177257302", 
	from: "+17174926756", 
	body: "my bod!!",    
}, function(err, message) { 
	console.log(message.sid); 
});
*/

module.exports = client;