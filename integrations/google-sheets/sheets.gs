/**
 * Get sheet information
 *
 * @return {sheet} sheet
*/
function sheet() {
  return {
    /**
    * Returns a JSON format.
    *
    * @param {String} spreadsheet_id the spreadsheet ID 
    * @param {String} sheet_name the sheet name
    * @param {String} heading_row_number the header row number
    * @return {JSON} the JSON data of the Spreadsheet
    */
    getJSON: function(spreadsheet_id, sheet_name, heading_row_number) {
      var ssid = spreadsheet_id;
      var sname = sheet_name;
      var hrow = heading_row_number;
    
      var dataHeadings = [];
      var dataBody = [];
    
      // Spreadsheet Information
      var ss = SpreadsheetApp.openById(ssid); // Spreadsheet ID
      var sheet = (sname !== '' || sname !== null) ? ss.getSheetByName(sname) : ss.getActiveSheet(); // Sheet name
      var rows = sheet.getRange(1,1,sheet.getLastRow(), sheet.getLastColumn()).getValues(); // Get all cells values
      var headings = rows[(hrow !== '' || hrow !== null) ? hrow : 0].map(String); // Select heading row position
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
      
      // File location in /integrations/google-sheets/util.gs
      var data = generateHeadings_(dataBody, dataHeadings); // Assign headings to data body
      var response = JSON.stringify(data); // Apply JSON format
  
      return response;
    },
    
    /**
    * Sort sheets alphabetically.
    *
    * @param {String} file_name the name giving to the pdf file
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    getPDF: function(spreadsheet_id, sheet_name, from_range, to_range) {
      var ss, ssid, sheet, sname, ssname, file, folder;
      
      ssid = spreadsheet_id;
      sname = sheet_name;
      
      // Spreadsheet Information
      ss = (ssid !== '' || ssid !== null) ? SpreadsheetApp.openById(ssid) : SpreadsheetApp.getActiveSpreadsheet(); // Spreadsheet ID
      sheet = (sname !== '' || sname !== null) ? ss.getSheetByName(sname) : ss.getActiveSheet(); // Sheet name
      file = DriveApp.getFileById((ssid !== '' || ssid !== null) ? ssid : SpreadsheetApp.getActiveSpreadsheet().getId());
      ssname =  ss.getName();
      
      // Get parent folder
      (file.getParents().hasNext()) ? folder = file.getParents().next() : folder = DriveApp.getRootFolder();
    },
    
   /**
    * Sort sheets alphabetically.
    *
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    orderSheetByName: function(spreadsheet_id) {
      var ss, sheets, sheet, sheetName, sheetArray, sortedName, num, result;
      ss = (spreadsheet_id !== '' || spreadsheet_id != null) ? SpreadsheetApp.openById(spreadsheet_id) : SpreadsheetApp.getActiveSpreadsheet();
      sheets = ss.getSheets();
      sheetArray = new Array();
      
      // Get sheets name
      for(num = 0; num < sheets.length; num++) {
        sheetName = sheets[num].getName();
        sheetArray.push(sheetName);
      }
      
      // Sort and Move active sheet
      sheetArray.sort().forEach(function (name, index) {
        ss.setActiveSheet(ss.getSheetByName(name));
        ss.moveActiveSheet(1 + index);
      });
      return '';
    }
  }
}
