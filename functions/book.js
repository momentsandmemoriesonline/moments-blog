const googleAuth = require('./google-auth');
const {book} = require("./google-calendar-function");

exports.handler = async(event, context) => {
  console.log(event.body)
    const { name = "Anonymous" } = event.queryStringParameters;
    var photoEvent = JSON.parse(event.body);
    console.log(photoEvent)
    return googleAuth.login()
    .then(auth => {
      book(auth, photoEvent)
      .then(data => {
        console.log("in here")
        return {
          statusCode: 200,
          body: "BOOKED"
        };
      })
      .catch(err => {
        console.log(err)
        console.log("err here")
      });
      
    });  
  };