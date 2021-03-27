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

const emailConfig = {
  user: process.env.user,
  pass: process.env.pass,
  fromEmail: process.env.fromemail,
  ccEmail: process.env.ccemail,
  accountNo: process.env.accountNo,
  sortCode: process.env.sortCode,
  deposit: process.env.deposit
}

module.exports = {bookableSlotConfig, bookedSlotConfig, emailConfig}