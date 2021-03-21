const bookableSlotConfig = {
    calendarId: 'ck0csju8089dj23bun2hquuq8s@group.calendar.google.com',
    timeMin: (new Date()).toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: 'startTime',
}

const bookedSlotConfig = {
    calendarId: '2m03rte6f4tpri3nt1gll4fmb8@group.calendar.google.com',
    timeMin: (new Date()).toISOString(),
    maxResults: 50,
    singleEvents: true,
    orderBy: 'startTime',
  }

module.exports = {bookableSlotConfig, bookedSlotConfig}
