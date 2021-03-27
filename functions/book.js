const googleAuth = require('./google-auth');
const {book} = require("./google-calendar-function");
const {google} = require('googleapis');
const {email} = require('./email');

exports.handler = async(event) => {
    var photoEvent = JSON.parse(event.body);
    var auth = await googleAuth.login()
    var bookvar = await book(auth, photoEvent);
    var emailSent = email(photoEvent);
    
    return {
      statusCode: 200,
      body: "BOOKED"
    };
  };