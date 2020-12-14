const googleAuth = require('./google-auth');
const {getBookable, getBooked} = require("./google-calendar-function");
const {splitSlots, removeConflicts} = require("./slot-util");

exports.handler = (event, context) => {
    const { name = "Anonymous" } = event.queryStringParameters;
    console.log("HERE2")
    googleAuth.login()
    .then(auth => Promise.all([getBookable(auth), getBooked(auth)])
    .then(data => {
      console.log("HERE2")
      console.log(removeConflicts(splitSlots(data[0]), data[1]));
      return {
        statusCode: 200,
        body: removeConflicts(splitSlots(data[0]), data[1])
      };
    }));  


    
  };