const {bookableSlotConfig, bookedSlotConfig} = require('./config.js')
const {google} = require('googleapis');


function getBookable(auth) {
  return new Promise((resolve, reject) => {
    const calendar = google.calendar({version: 'v3', auth});
    bookableSlotConfig.auth = auth;
    calendar.events.list(bookableSlotConfig, (err, res) => {
      if (err){
        console.log(err);
        return reject();
      }
      var bookableSlots = [];
      const events = res.data.items;
      if (events.length) {
        events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          bookableSlots.push({'start':event.start.dateTime, 'end': event.end.dateTime})
        });
        resolve(bookableSlots);
      } else {
        console.log('No upcoming events found.');
        resolve('No upcoming events found.')
      }
    });
  })
}

function getBooked(auth) {
  return new Promise((resolve, reject) => {
    var bookedSlots = [];
    const calendar = google.calendar({version: 'v3', auth});
    calendar.events.list(bookedSlotConfig, (err, res) => {
      if (err){
        console.log(err)
        return reject();
      } 
      const events = res.data.items;
      if (events.length) {
        events.map((event, i) => {
          const start = event.start.dateTime || event.start.date;
          bookedSlots.push({'start':event.start.dateTime, 'end': event.end.dateTime})  
        });
        resolve(bookedSlots)
      } else {
        console.log('No upcoming events found.');
        resolve([])
      }
    });
  })
}

async function book(auth, bookingEvent){
  console.log("trying to booking")
  return new Promise((resolve, reject) => {
    const calendar = google.calendar({version: 'v3', auth});
    console.log("getting ready to insert")
    const conf = {
      auth: auth,
      calendarId: bookedSlotConfig.calendarId,
      resource: bookingEvent,
    };
    console.log(auth)
    calendar.events.insert(conf, function(err, res) {
      console.log("Made it here")
      if (err) {
        console.log('There was an error contacting the Calendar service: ' + err);
        reject(err);
      }
      console.log("CREATED")      
      resolve("created");
    });
    console.log("HOW'D WE GET HERE THEN")

  })
  .catch(err => {
    console.log(err);
  });
  
}

module.exports = {getBookable, getBooked, book}