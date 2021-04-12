//req tokens 
  const accountSid = "";
  const authToken = "";

  // require the Twilio module and create a REST client
  const client = require("twilio")(accountSid, authToken);
// messages
  client.messages
    .create({
      to: "+32456221135",
      from: " +13479342576",
      body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    })
    .then((message) => console.log(message.sid));


