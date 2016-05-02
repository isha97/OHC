Template.viewPatientDetailsTemplate.helpers({
	'patient_details': function() {
        return patientsCollection.findOne();
    }
});
