/**
 * Email function
 *
*/
function mail_() {
  return {
    /**
    * Automatically reply to email.
    *
    * @param {recipient} the recipient
    * @param {subject} the email subject
    * @param {message} the body of the email
    */
    autoReply: function(recipient, subject, message) {
      
    }
  }
}

function demoEmail() {
  var sendEmail = {}
  var emailRecipient = {
    email: "john.doe@example.com",
  }

  emailRecipient.firstName = "John";
  emailRecipient.lastName = "Doe";

  for(var member in emailRecipient) {
    if(emailRecipient.hasOwnProperty(member)) {
      console.log('The key ' + member + " to the value of " + emailRecipient[member]);
    }
  }

//  console.log(emailRecipient.firstName);
}
