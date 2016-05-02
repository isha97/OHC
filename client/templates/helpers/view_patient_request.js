Template.viewPatientRequestTemplate.helpers({
    details: function () {
      return symptomsCollection.find({});
    },
    'selectedpatient': function(){
      var patientId = this._id;
      var selectedPatient = Session.get('selectedPatient');
      if(patientId == selectedPatient){
	console.log("Selected!");
          return "selected"
      }
    },
     uploads: function() {
      return Uploads.find();
    }
  });
