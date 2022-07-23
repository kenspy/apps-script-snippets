/**
 * Get user's information
 *
 * First Name: user().firstName();
 * Last Name: user().lastName();
 * Full Name: user().fullName();
 * Email: user().email();
 * Initials: user().initials();
 * Profile Image: user().profileImage(document_id);
 * Domain Name: user().domainName();
 *
 * @param {String} document_id
 *
 * @return {String} firstName
 * @return {String} laststName
 * @return {String} fullName
 * @return {String} email
 * @return {String} initials
 * @return {String} profileImage
 * @return {String} domainName
*/
function user() {
  return {
    /**
    * Returns the user's first name from full name.
    *
    * @return {String} first
    */
    firstName: function() {
      var about = Drive.About.get();
      var name = about["user"]["displayName"].split(' ');
      var first = name[0];
    
      return first;
    },
    
    /**
    * Returns the user's last name from full name.
    *
    * @return {String} last
    */
    lastName: function() {
      var about = Drive.About.get();
      var name = about["user"]["displayName"].split(' ');
      var last = name[name.length -1];
    
      return last;
    },
    
    /**
    * Returns the user's full name.
    *
    * @return {String} fullName
    */
    fullName: function() {
      var about = Drive.About.get();
      var fullName = about["user"]["displayName"];
    
      return fullName;
    },
    
    /**
    * Returns the user's email address.
    *
    * @return {String} email
    */
    email: function() {
      var email = Session.getActiveUser().getEmail();
    
      return email;
    },
    
    /**
    * Returns the user's first name from full name.
    *
    * @return {String} initials
    **/
    initials: function() {
      var about = Drive.About.get();
      var name = about["user"]["displayName"].split(' ');
      var first = name[0].charAt(0).toUpperCase();
      var last = name[name.length -1].charAt(0).toUpperCase();
      var initial = first + last;
      
      return initial;
    },
    
    /**
    * Returns the user's profile image url.
    *
    * @param {String} document_id the document ID
    * @return {String} profileImage
    */
    profileImage: function(document_id) {
      var file = DriveApp.getFileById(document_id);
      var img = file.getOwner().getPhotoUrl();
      
      return img;
    },
    
    /**
    * Returns the user's domain name.
    *
    * @param {String} document_id
    * @return {String} domainName
    */
    domainName: function(document_id) {
      var file = DriveApp.getFileById(document_id);
      var domain = file.getOwner().getDomain();
      
      return domain;
    }
  }
}

