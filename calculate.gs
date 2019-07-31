/**
 * Calculate years, months, days and hours between two dates
 *
 * @return {calculate} calculate
*/
function calculate() {
  return {

    /**
    * Returns the years between two dates.
    *
    * @param {String} from_date the start date
    * @param {String} to_date the end date
    * @return {String} the year(s) between the dates
    */
    years: function(from_date, to_date) {
      var from = new Date(from_date);
      var to =  new Date(to_date);
      var result = to.getFullYear() - from.getFullYear();
      
      return result.toString();
    },

    /**
    * Returns the months between two dates.
    *
    * @param {String} from_date the start date
    * @param {String} to_date the end date
    * @return {String} the month(s) between the dates
    */
    months: function(from_date, to_date) {
      var from = new Date(from_date);
      var to =  new Date(to_date);
      var months = (to.getFullYear() - from.getFullYear()) * 12;
      months -= from.getMonth() + 1;
      months += to.getMonth();
      var result = (months <= 0) ? 0 : months;
      
      return result.toString();
    },
  
    /**
    * Returns the days between two dates.
    *
    * @param {String} from_date the start date
    * @param {String} to_date the end date
    * @return {String} the day(s) between the dates
    */
    days: function(from_date, to_date) {  
      var from = new Date(from_date);
      var to =  new Date(to_date);
      var result = Math.round(Math.abs((from.getTime() - to.getTime()) / (24*60*60*1000)));
      
      return result.toString();
    },
  
    /**
    * Returns the hours between two dates.
    *
    * @param {String} from_date the start date
    * @param {String} to_date the end date
    * @return {String} the hour(s) between the dates
    */
    hours: function(from_date, to_date) {
      var from = new Date(from_date);
      var to =  new Date(to_date);
      var result = Math.abs(from.getTime() - to.getTime()) / (60*60*1000);
      
      return result.toString();
    }
  }
} 

