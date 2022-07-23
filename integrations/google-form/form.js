/**
 * Extend Form with Spreadsheet
 *
 * @return {form} form
*/
function form() {
  return {
    /**
    * Returns a Dropdown items.
    *
    * @param {String} form_id the spreadsheet ID 
    * @param {String} formDropdown_id the sheet name
    * @param {String} spreadsheet_id the spreadsheet ID 
    * @param {String} sheet_name the sheet name
    * @param {String} heading_row_number the header row number
    * @return {List} the List item of the Spreadsheet
    */
    dropdown: function(form_url, formDropdown_id, spreadsheet_id, sheet_name, row_number) {
      var formid = form_url;
      var ssid = spreadsheet_id;
      var sname = sheet_name;
    
      var dataHeadings = [];
      var dataBody = [];
      
      // Form Information
      var form = FormApp.openByUrl(formid);
      var itemList = form.getItemById(formDropdown_id).asListItem();
    
      // Spreadsheet Information
      var ss = (ssid !== '' || ssid !== null) ? SpreadsheetApp.openById(ssid) : SpreadsheetApp.getActive(); // Spreadsheet ID
      var sheet = (sname !== '' || sname !== null) ? ss.getSheetByName(sname) : ss.getActiveSheet(); // Sheet name
      var rows = sheet.getRange(2,row_number,sheet.getLastRow(), sheet.getLastColumn()).getValues(); // Get all cells values
      var arr = [];
    
      // Get array
      for (var i = 0; i < rows.length; i++) {
        if(rows[i][0] != "") {
          arr[i] = rows[i][0]; 
          itemList.setChoiceValues(arr);
        }
      }
    },
    
    /**
    * Create PDF
    **/
    
    createPDF: function(form_url) {
      
    }
    
    /**
    *
    **/
//    createDoc: function(form_url, document_id, new_name) {
//      
//    },
  }
}