// Headings generator
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

// Check if File Exist
function ifFileExist_(folder_id, file_name) {
  var folder = DriveApp.getFolderById(folder_id);
  var file = folder_id != null ? folder.getFilesByName(file_name) : DriveApp.getFilesByName(file_name);
  var check = file.hasNext();
  
  if (check === true) { 
    return true;
  } else {
    return false;
  }
}

// 
function getFileId_(file_url) {
  
}