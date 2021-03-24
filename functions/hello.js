const googleAuth = require('./google-auth');
const {getBookable, getBooked} = require("./google-calendar-function");
const {splitSlots, removeConflicts} = require("./slot-util");

exports.handler = async(event, context) => {


    const { name = "Anonymous" } = event.queryStringParameters;
    return googleAuth.login()
    .then(auth => Promise.all([getBookable(auth), getBooked(auth)])
    .then(data => {
      let slots = [];
      if(data[0] !== 'No upcoming events found.'){
        slots = splitSlots(data[0]);
      }
      return {
        statusCode: 200,
        body: JSON.stringify(removeConflicts(slots, data[1]))
      };
    }));  
  };