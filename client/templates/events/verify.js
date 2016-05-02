Template.verifyProfileTemplate.events({
    'submit #verifierlogin': function(event){
        event.preventDefault();

        var username = event.target.username.value;
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
                sAlert.success('Successfully logged out',{onRouteClose:false});
            }
        });
    },
    'click #approve': function(event){
        //console.log(this._id);
        Meteor.call("approveUser", this._id, function(error,result){
            if (error){
                sAlert.error('Error while approving '+error.message);
            }
            else {
                sAlert.success('Successfully approved user');   
            }
        });
    },
    'submit #rejectForm': function(event){
        event.preventDefault();
        // console.log(this._id);
        // console.log(event.target.selector.value);
        sAlert.info("Wait till you get an acknowledgement from server.");
        var selectorValue = event.target.selector.value;
        if ( selectorValue === "custom" ){
            var reason = event.target.reason.value;
            reason = reason.trim();
            if ( reason ){
                //console.log("-"+reason+"-");
                Meteor.call("rejectUser", this._id, selectorValue, reason, function(error, result){
                    if (error){
                        sAlert.error('Error while rejecting '+error.message);
                    }
                    else {
                        sAlert.success('Successfully rejected user.');   
                    }
                });
            }
            else {
                sAlert.error('Require reason in case of custom reject');
            }
        }
        else {
            Meteor.call("rejectUser", this._id, selectorValue, null, function(error, result){
                if (error){
                    sAlert.error('Error while rejecting '+error.message);
                }
                else {
                    sAlert.success('Successfully rejected user.');   
                }
            });
        }

    }/*,
    'change #selector': function(event){
        console.log($(event.target).val());
        var newValue = $(event.target).val();
        if (newValue === "custom"){
            Session.set("showCustomBox",true);
        }
        else {
            Session.set("showCustomBox",false);
        }
    }*/
});