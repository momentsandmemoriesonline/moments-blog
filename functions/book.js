const googleAuth = require('./google-auth');
const {book} = require("./google-calendar-function");

exports.handler = async(event) => {
    var photoEvent = JSON.parse(event.body);
    var auth = await googleAuth.login()
    var bookvar = await book(auth, photoEvent) 
    return {
      statusCode: 200,
      body: "BOOKED"
    };
  };