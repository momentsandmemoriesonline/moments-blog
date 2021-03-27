const {emailConfig} = require('./config.js')
const {google} = require('googleapis');
const nodemailer = require('nodemailer');
const Email = require('email-templates');

async function email(photoEvent){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: emailConfig.user,
            pass: emailConfig.pass
        }
      });

      const email = new Email({
        transport: transporter,
        send: true,
        preview: false,
      });
  
      email.send({
        template: 'hello',
        message: {
          from: emailConfig.fromEmail,
          to: photoEvent.email,
          cc: emailConfig.ccEmail,
          attachments: [
            {
              filename: 'logo.png',
              path: 'static/img/logo.png',
              cid: 'logo' //same cid value as in the html img src
            }
          ]
        },
        locals: {
          photoEvent: photoEvent,
          emailConfig
        },
      }).then(() => console.log('email has been send!'));
}

module.exports = {email}