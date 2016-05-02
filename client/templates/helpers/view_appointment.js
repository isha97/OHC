Template.ViewAppointmentTemplate.helpers({
    apprequest: function () {
	var currentUsername = Meteor.user().username;
      return appointmentsCollection.find({dname:currentUsername});
    },
    'selectedpatien': function(){
      var patientId = this._id;
      var selectedPatient = Session.get('selectedPatient');
      if(patientId == selectedPatient){
	console.log("Selected!");
          return "selected"
      }
    }
  });
