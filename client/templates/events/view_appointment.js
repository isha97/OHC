Template.ViewAppointmentTemplate.events({
    'click .patien': function(){
      var patientId = this._id;
      Session.set('selectedPatient', patientId);
	console.log(patientId);
    },
    "submit .appoint": function (event){
	event.preventDefault();
      var selectedPatient = Session.get('selectedPatient');
	var pres = event.target.Status.value;
      appointmentsCollection.update(selectedPatient, {$set: {status: pres} });
	event.target.Status.value ="";
    }
  });
