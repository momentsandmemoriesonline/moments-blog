const fs = require('fs');
const {google} = require('googleapis');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


let jwtClient = new google.auth.JWT(
    process.env.client_email,
    null,
    process.env.private_key.replace(/\\n/gm, '\n'),
    ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.events', 'https://mail.google.com/']); 

exports.login = async function() {
    return new Promise((resolve, reject) => {
        jwtClient.authorize(function (err, tokens) {
            if (err) {
              console.log(err);
              reject();
            } else {
              resolve(jwtClient);
            }
           });
    })
}
  