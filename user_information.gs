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


// Get First Name
function firstName() {
  var about = Drive.About.get();
  var name = about["user"]["displayName"].split(' ');
  var first = name[0];

  return first;
}

// Get Last Name
function lastName() {
  var about = Drive.About.get();
  var name = about["user"]["displayName"].split(' ');
  var last = name[name.length -1];

  return last;
}

// Get Full Name
function fullName() {
  var about = Drive.About.get();
  var fullName = about["user"]["displayName"];

  return fullName;
}

function email() {
  var email = Session.getActiveUser().getEmail();
  return email;
}

// Get Profile Image from document ID
function profileImage(document_id) {
  var file = DriveApp.getFileById(document_id);
  var img = file.getOwner().getPhotoUrl();
  
  return img;
}

// Get domain name from document ID
function domainName(document_id) {
  var file = DriveApp.getFileById(document_id);
  var domain = file.getOwner().getDomain();
  
  return domain;
}

