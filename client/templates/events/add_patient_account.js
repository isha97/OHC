Template.addPatientAccountTemplate.events({
   'submit form': function(event){
        event.preventDefault();

        var username = event.target.username.value;
        var password = event.target.password.value;

        if ( !isValidUsername(username) ) {
            sAlert.error("Invalid Username : Must be atleast 6 characters");
            return;
        }
        
        if ( !isValidPassword(password) ){
            sAlert.error("Please enter a valid password");
            return;
        }

        Meteor.call("addPatientUser", username, password, this.patientId, function(err){
            if(err){
                sAlert.error(err.message);
            }
            else {
                sAlert.success("Successful");
            }
        });
        Router.go("/loginpatient");
        // The following has to be done on the server... Call a method
        // Create User, Add to Roles of 'merchant', Send enrollment link
        /*
        Accounts.createuser({username:username,email:email,profile:{merchant: this.merchantId}}, function(error){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success("")
            }
        });
        */

   } 
});
