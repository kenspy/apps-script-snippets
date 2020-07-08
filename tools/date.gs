/**
 * Date and time formating
 *
 * @return {Date} date the date
*/
function date() {
  return {

    /**
    * Returns the date and time.
    *
    * @param {String} date_time_format Format using: <code>'MMMM dd, yyyy'</code>, 'MM/dd/yyyy' or 'HH:mm' 
    * @return {String}
    */
    newDate: function(date_time_format) {
      var date = new Date();
      var format = (date_time_format != '' && date_time_format != null) ? date_time_format : 'MMMM dd, yyyy HH:mm:ss a';
      var timezone = Session.getScriptTimeZone();
      var result = Utilities.formatDate(date, timezone, format);
      
      return result;   
    },

    /**
    * Returns the time.
    *
    * @param {String} time_format Format using: 'HH:mm:ss a' 
    * @return {String}
    */
    newTime: function(time_format) {
      var date = new Date();
      var format = (time_format != '' && time_format != null) ? time_format : 'HH:mm:ss a';
      var timezone = Session.getScriptTimeZone();
      var result = Utilities.formatDate(date, timezone, format);
      
      return result;
    }
  }
}
