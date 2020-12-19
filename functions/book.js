const googleAuth = require('./google-auth');
const {book} = require("./google-calendar-function");

exports.handler = async(event) => {
    var photoEvent = JSON.parse(event.body);
    await googleAuth.login()
    .then(auth => {
      book(auth, photoEvent)
      .then(data => {
        console.log("in here" + data)
      })
      .catch(err => {
        console.log(err)
        console.log("err here")
      });
      
    });  
    return {
      statusCode: 200,
      body: "BOOKED"
    };
  };