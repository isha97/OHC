Template.DoctorProfileTemplate.helpers({
	doctor_profile: function(){
		var currentUserId = Meteor.user().username;
		console.log(currentUserId);
    		return doctorsCollection.find({id:currentUserId});  
	}
});
