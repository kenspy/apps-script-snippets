/*****************************************************************************
MIT License

Copyright (c) 2019 Kenson G.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Developer: Kenson G.
webiste: kensongilles.com
Description: Google Apps Script Snippets
******************************************************************************/

// Get Date and Time
// Month:'MMMM' Day:'dd' Year:'yyyy' Hours:'HH:mm:ss'
function newDate(date_time_format) {
  var date = new Date();
  var format = (date_time_format != '' && date_time_format != null) ? date_time_format : 'MMMM dd, yyyy HH:mm:ss Z';
  var timezone = Session.getScriptTimeZone();
  var result = Utilities.formatDate(date, timezone, format);
  
  return result;
}

// Caluclate years between two dates
function calculateYears(from_date, to_date) {
  var from = new Date(from_date).getYear();
  var to =  new Date(to_date).getYear();
  var result = to - from;
  
  return result.toString();
}

// Calculate months between two dates
function calculateMonths(from_date, to_date) {
  var from = new Date(from_date);
  var to =  new Date(to_date);
  var months = (to.getYear() - from.getYear()) * 12;
      months -= from.getMonth() + 1;
      months += to.getMonth();
  var result = (months <= 0) ? 0 : months;
  
  return result.toString();
}

// Calculate days between two dates
function calculateDays(from_date, to_date) {  
  var from = new Date(from_date);
  var to =  new Date(to_date);
  var result = Math.round(Math.abs((from.getTime() - to.getTime()) / (24*60*60*1000)));
  
  return result.toString();
}

// Calculate hours between two dates
function calculateHours(from_date, to_date) {
  var from = new Date(from_date);
  var to =  new Date(to_date);
  var result = Math.abs(from.getTime() - to.getTime()) / (60*60*1000);
  
  return result.toString();
}

