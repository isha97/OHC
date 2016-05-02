Template.viewPatientRequestTemplate.events({
    'click .patient': function(){
      var patientId = this._id;
      Session.set('selectedPatient', patientId);
	console.log(patientId);
    },
    "submit .prescription": function (event){
	event.preventDefault();
      var selectedPatient = Session.get('selectedPatient');
	var pres = event.target.prescription.value;
	var doct=Meteor.user().username;
      symptomsCollection.update(selectedPatient, {$set: {prescription: pres} });
	symptomsCollection.update(selectedPatient, {$set: {doctor: doct} });
	event.target.prescription.value ="";
    }
  });
