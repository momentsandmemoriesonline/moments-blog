const googleAuth = require('./google-auth');
const {getBookable, getBooked} = require("./google-calendar-function");
const {splitSlots, removeConflicts} = require("./slot-util");

exports.handler = async(event, context) => {
    const { name = "Anonymous" } = event.queryStringParameters;
    return googleAuth.login()
    .then(auth => Promise.all([getBookable(auth), getBooked(auth)])
    .then(data => {
      console.log(JSON.stringify(removeConflicts(splitSlots(data[0]), data[1])))
      return {
        statusCode: 200,
        body: JSON.stringify(removeConflicts(splitSlots(data[0]), data[1]))
      };
    }));  
  };