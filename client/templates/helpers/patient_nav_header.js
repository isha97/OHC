Template.patientNavHeader.helpers({
   'userPatientName': function(){
        var patientId = Meteor.user().profile.patient;
        if (patientId) {
            patient = patientsCollection.findOne({_id:patientId});
            if (patient)
                return patient.name;
        }
        return "Patient";
   },
   'userLoggedIn': function(){
        if (Meteor.user())
            return true;
        else
            return false;
   },
   'patientTypeOffline': function(){
      var patientId = Meteor.user().profile.patient;
        if (patientId) {
            patient = patientsCollection.findOne({_id:patientId});
            if (patient && patient.type == "offline")
                return true;
        }
        return false;
   }
});
