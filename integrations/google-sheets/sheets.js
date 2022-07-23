/**
 * Get user's information
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
  
      var data = generateHeadings_(dataBody, dataHeadings); // Assign headings to data body
      var response = JSON.stringify(data); // Apply JSON format
  
      return response;
    },
    
   /**
    * Sort sheets alphabetically.
    *
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    orderSheetsByName: function(spreadsheet_id) {
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
    },
    
    /**
    * Create document.
    *
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    createDoc: function(spreadsheet_id, sheet_name, heading_row_number, folder_id, document_id, new_name, expressions) {
      var ss, ssid, sheet, sname, sheetArray, rows, hrow, headings, body, num, folder, result;
      sname = sheet_name;
      hrow = heading_row_number;
      
      folder = DriveApp.getFolderById(folder_id);
      ss = (spreadsheet_id !== '' || spreadsheet_id != null) ? SpreadsheetApp.openById(spreadsheet_id) : SpreadsheetApp.getActiveSpreadsheet();
      sheet = (sname !== '' || sname !== null) ? ss.getSheetByName(sname) : ss.getActiveSheet();
      rows = sheet.getRange(1,1,sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues(); // Get all cells values
      headings = rows[(hrow !== '' || hrow !== null) ? hrow : 0].map(String); // Select heading row position
      body = rows.slice(1); // Remove heading from body result
      var dataHeadings = [];
      var dataBody = [];
      var params = Object.assign(new_name);
      var exp = Object.assign(expressions);
    
      // headings
      headings.forEach(function(title) {
        dataHeadings.push(title);
      });
  
      // body
      body.forEach(function(res, i) {
        dataBody.push(res);
      });
  
      var data = generateHeadings_(dataBody, dataHeadings); // Assign headings to data body
      var resp = JSON.stringify(data); // Apply JSON format
      var head = Object.keys(data);
      
      // colum
      for (var i=0; i < data.length; i++) {
        var fileKey = [];
        
        for(var j=0; j < params.colums.length; j++) {
          var col = params.colums[j];
          fileKey.push(data[i][col]);
        }
        
        var fileName = `${params.prefix} ${fileKey.slice(0, params.colums.length).join(' ')} ${params.suffix}`;
        
        //Make a copy of the template file
        var documentId = DriveApp.getFileById(document_id).makeCopy(folder).getId();
        var doc = DocumentApp.openById(documentId);
        var body = doc.getBody();
        var footer = doc.getFooter();
        
        //Rename the copied file
        DriveApp.getFileById(documentId).setName(fileName);
        
        //
        for(j=0; j < Object.keys(data[i]).length; j++) {
          footer.setText(fileName);
          body.replaceText(exp.open + Object.keys(data[i])[j] + exp.closed, Object.values(data[i])[j].length > 0 ? Object.values(data[i])[j] : exp.open + Object.keys(data[i])[j] + exp.closed );
        }
      }
    },
    
    /**
    * Create document.
    *
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    updateDoc: function(spreadsheet_id, sheet_name, heading_row_number, folder_id, document_id, file_name) {
      var ss, ssid, sheet, sname, sheetArray, rows, hrow, headings, body, num, result;
      sname = sheet_name;
      hrow = heading_row_number;
      
      ss = (spreadsheet_id !== '' || spreadsheet_id != null) ? SpreadsheetApp.openById(spreadsheet_id) : SpreadsheetApp.getActiveSpreadsheet();
      sheet = (sname !== '' || sname !== null) ? ss.getSheetByName(sname) : ss.getActiveSheet();
      rows = sheet.getRange(1,1,sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues(); // Get all cells values
      headings = rows[(hrow !== '' || hrow !== null) ? hrow : 0].map(String); // Select heading row position
      body = rows.slice(1); // Remove heading from body result
      var dataHeadings = [];
      var dataBody = [];

      // headings
      headings.forEach(function(title) {
        dataHeadings.push(title);
      });
  
      // body
      body.forEach(function(res, i) {
        dataBody.push(res);
      });
  
      var data = generateHeadings_(dataBody, dataHeadings); // Assign headings to data body
      var resp = JSON.stringify(data); // Apply JSON format
      var head = Object.keys(data);
      
      if(ifFileExist_(folder_id, file_name)) {
        data.filter(function(current, index, self){
        
          var fileId = DriveApp.getFilesByName(file_name).next().getId();
          var doc = DocumentApp.openById(fileId);
          var body = doc.getBody();
          var footer = doc.getFooter();
          
          if(footer.getText().toUpperCase().indexOf(file_name) > -1) {
//            Logger.log(current);
//            body.replaceText('{{'+ Object.keys(data[i])[j] +'}}', Object.values(data[i])[j].length > 0 ? Object.values(data[i])[j] : '{{'+ Object.keys(data[i])[j] +'}}' );
//            return;
          }
        });
      }
    },
    
    /**
    * Sort sheets alphabetically.
    *
    * @param {String} file_name the name giving to the pdf file
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    createPDF: function(spreadsheet_id, sheet_name, from_range, to_range) {
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
    * Create document.
    *
    * @param {String} spreadsheet_id the spreadsheet ID
    */
    match: function(sheet1_id, range, sheet2_id, range, from, to) {
     var ss1, ss2; 
    }
  }
}
