if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const bookableSlotConfig = {
    calendarId: process.env.bookableCalendarId,
    timeMin: (new Date()).toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: 'startTime',
}

const bookedSlotConfig = {
    calendarId: process.env.bookedCalendarId,
    timeMin: (new Date()).toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: 'startTime',
  }

module.exports = {bookableSlotConfig, bookedSlotConfig}