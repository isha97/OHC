Template.verifyProfileTemplate.helpers({
    'user' : function() {
        /*console.log(Meteor.users.find({"profile.frontIdentityImage":{$ne:null},"profile.backIdentityImage":{$ne:null},
        "profile.university":{$ne:null},"profile.isVerified":false}).count());
        console.log(Meteor.users.find({"profile.frontIdentityImage":{$ne:null},"profile.backIdentityImage":{$ne:null},
        "profile.university":{$ne:null},"profile.isVerified":false}).fetch());*/
        return Meteor.users.find( {$or : [
        {
            
                "frontIdentityImage":{$ne:null},
                "backIdentityImage":{$ne:null},
                "university":{$ne:null},
                "profile.isVerified":false
            
        },
        {
            
                "profile.frontIdentityImage":{$ne:null},
                "profile.backIdentityImage":{$ne:null},
                "profile.university":{$ne:null},
                "profile.isVerified":false
            
        }
    ]}).fetch();
    }
});