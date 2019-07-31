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

