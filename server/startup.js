Meteor.startup(function(){

    // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
  Accounts.emailTemplates.from = 'D2S <no-reply@d2scard.com>';
  // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
  Accounts.emailTemplates.siteName = 'D2S';

  // A Function that takes a user object and returns a String for the subject line of the email.
  Accounts.emailTemplates.enrollAccount.subject = function(user) {
    return 'Activate your account';
  };

  // A Function that takes a user object and a url, and returns the body text for the email.
  // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
  Accounts.emailTemplates.enrollAccount.text = function(user, url) {
    if ( user && user.username ){
      return 'Hello, Your username is '+user.username+'. Click on the following link to activate your email address: ' + url;  
    }
    return 'Click on the following link to activate your email address: ' + url;
  };

  Accounts.emailTemplates.resetPassword.subject = function(user){
    return "Reset your password";
  }

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    return 'Click on the following link to reset your password: ' + url;
  };
  
  UploadServer.init({
    tmpDir: process.env.PWD + '/.uploads/tmp',
    uploadDir: process.env.PWD + '/.uploads/',
    overwrite: true,
    maxFileSize: 10000000,
    checkCreateDirectories: true, //create the directories for you
    getFileName: function(fileInfo, formData) {
      if (formData && formData.offerId != null) {
        var re = /(?:\.([^.]+))?$/;
        return formData.offerId+"."+re.exec(fileInfo.name)[1];
      }
      else if ( formData && formData.merchantId != null ){
        var re = /(?:\.([^.]+))?$/;
        return formData.merchantId+"."+re.exec(fileInfo.name)[1]; 
      }
      else if ( formData && formData.forMerchant != null ){
        //var re = /(?:\.([^.]+))?$/;
        //return formData.merchantId+"."+re.exec(fileInfo.name)[1]; 
        return fileInfo.name;
      }
      else if ( formData && formData.forOffer != null ){
        //var re = /(?:\.([^.]+))?$/;
        //return formData.merchantId+"."+re.exec(fileInfo.name)[1]; 
        return fileInfo.name;
      }
      return fileInfo.name;
    },
    finished:function(fileInfo, formData){
      if (formData && formData.offerId != null){
        offersCollection.update({_id:formData.offerId}, {$set: {imglocation: process.env.ROOT_URL+"/upload/"+fileInfo.name}});
      }
      else if ( formData && formData.merchantId != null ){
        doctorsCollection.update({_id:formData.merchantId},{$set: {profileImageLocation: process.env.ROOT_URL+"/upload/"+fileInfo.name}});
      }
      else if ( formData && formData.forMerchant != null ){
        doctorsCollection.update({_id:formData.forMerchant},{$set: {profileImageLocation: process.env.ROOT_URL+"/upload/"+fileInfo.name}});        
      }
      else if ( formData && formData.forOffer != null ){
        //console.log("Here");
        offersCollection.update({_id:formData.forOffer}, {$set: {imglocation: process.env.ROOT_URL+"/upload/"+fileInfo.name}});
      }

    }
  });
  
  if ( Meteor.users.find().count() == 0 ){
    console.log("Adding siteadmin");
    var id = Accounts.createUser({username:'siteadmin', email:'mtshmtha@gmail.com'});
    Roles.addUsersToRoles(id,['siteadmin']);
    console.log("Gonna send the enrollment mail now.");
    Accounts.sendEnrollmentEmail(id);
    console.log("Siteadmin added");
  }
  
Meteor.startup(function () {
    Messages.remove({});
    Rooms.remove({});
    if (Rooms.find().count() === 0) {
      ["General Physician", "Gynaecologist", "Dentist", "ENT Specialist","Dermatologist","Paediatrician"].forEach(function(r) {
        Rooms.insert({roomname: r});
      });
    }
  });
  Meteor.startup(function() {
    reCAPTCHA.config({
        privatekey: '6LeS6gkTAAAAAMByiYSAr5unw8T2KHMX_2r23rOJ'
    });
});  
});
