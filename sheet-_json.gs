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

// SpreadsheetApp
// Get Spreadsheet Data as JSON
function getJson(spreadsheet_id, sheet_name, heading_row_number) {
  var ssid = spreadsheet_id;
  var sname = sheet_name;
  var hrow = heading_row_number;
  
  var dataHeadings = [];
  var dataBody = [];
  
  // Spreadsheet Information
  var ss = SpreadsheetApp.openById(ssid); // Spreadsheet ID
  var sheet = (sname !== '') ? ss.getSheetByName(sname) : ss.getActiveSheet(); // Sheet name
  var rows = sheet.getRange(1,1,sheet.getLastRow(), sheet.getLastColumn()).getValues(); // Get all cells values
  var headings = rows[(hrow !== '' || null) ? hrow : 0].map(String); // Select heading row position
  var body = rows.slice(1); // Remove heading from body result
  var arr = [];
  
  // headings
  headings.forEach(function(title) {
    dataHeadings.push(title);
  });
  
  // body
  body.forEach(function(res, i) {
    dataBody.push(res);
  });
  
  var data = generateHeadings_(dataBody, dataHeadings); // Assign headings to data body
  var response = JSON.stringify(data); // Apply JSON format
  
  Logger.log(data);
  return response;
}

// Generate spreadsheet headings
function generateHeadings_(body, headings) {
  return body.map(function(arr) {
    var bodyObj = {};
    var headObj = {};
    
    headings.forEach(function(head, i) {
      bodyObj[head] = arr[i]
    });
    
    return bodyObj;
  });
}

