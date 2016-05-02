Template.PatientProfileTemplate.helpers({
	patient_profile: function(){
		var currentUserId = Meteor.user().username;
		console.log(currentUserId);
    		return patientsCollection.find({user:currentUserId});  
	}
});
