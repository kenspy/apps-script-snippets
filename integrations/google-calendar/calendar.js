/**
 * 
 *
 * @return {calendar} calendar
*/
function calendar() {
  return {
    
    // List
    list: function() {
      return {
        
        // Calendars
        calendars: function() {
          var calendars;
          var pageToken;
          var calendar = [];
          do {
            calendars = Calendar.CalendarList.list({
              maxResults: 100,
              pageToken: pageToken
            });
            if (calendars.items && calendars.items.length > 0) {
              for (var i = 0; i < calendars.items.length; i++) {
                calendar.push(calendars.items[i]);
                Logger.log('%s (ID: %s)', calendar.summary, calendar.id);
              }
            } else {
              calendar.push('No calendars found');
              Logger.log('No calendars found.');
            }
            pageToken = calendars.nextPageToken;
          } while (pageToken);
          
          return calendar;
        }
      }
    }
  }
}