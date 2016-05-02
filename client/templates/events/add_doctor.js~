Template.addMerchantTemplate.events({
    'submit form': function(event){
        event.preventDefault();

        var username = event.target.usertake.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(username,password,function(error){
            if (error) {
                if (error.message == "User not found [403]"){
                  sAlert.error('Incorrect username or password');
                }
                else {
                  sAlert.error('Error while logging in: '+error.message); 
                }
            }
            else {
                sAlert.success('Logging in....');
            }
        });
    },
    'click #logout': function(event){
        Meteor.logout(function(err){
            if (err){
                sAlert.error('Error while logging out: '+error.message); 
            }
            else {
                sAlert.success('Successfully logged out!');
		Router.go("addMerchantRoute");
            }

        });
    }
});
