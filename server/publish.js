Meteor.publish('merchantOffersListing', function(){
    if ( this.userId ){
        var merchant = Meteor.users.findOne({_id:this.userId}).profile.merchant;
        return [doctorsCollection.find({_id:merchant}) ]
    }
});
Meteor.publish('patientOffersListing', function(){
    if ( this.userId ){
        var patient = Meteor.users.findOne({_id:this.userId}).profile.patient;
        return [patientsCollection.find({_id:patient}) ]
    }
});
Meteor.publish('livechat',function(){
    return [ Rooms.find(),
            Messages.find({}, {sort: {ts: -1}})]
});
Meteor.publish('showMerchant', function(){
    return doctorsCollection.find();
});
Meteor.publish('appdetails', function(){
    return appointmentsCollection.find();
});
Meteor.publish('viewapp', function(){
    return appointmentsCollection.find();
});
Meteor.publish('appstts', function(){
    return appointmentsCollection.find();
});
Meteor.publish('RequestDoctor',function(){
	return [symptomsCollection.find({}), Uploads.find()]
});
Meteor.publish('patientprofile',function(){
	return patientsCollection.find({});
});
Meteor.publish('doctorprofile',function(){
	return doctorsCollection.find({});
});
Meteor.publish('PatientRequests',function(){
	return [symptomsCollection.find({}), patientsCollection.find({}), Uploads.find()]
});
Meteor.publish('bookAppointment', function(){
    return doctorsCollection.find();
});
Meteor.publish('Insertinpatient', function(){
    return patientsCollection.find();
});



Meteor.publish('modifymerchant', function(merchantId){
    
    
    return doctorsCollection.find({_id:merchantId});
});

Meteor.publish('viewdetails', function(patientName){
    
    //console.log(patientName);
    //console.log(patientsCollection.find({user:patientName}));
    return patientsCollection.find({user:patientName});
});

Meteor.publish('viewAllOffersMerchants', function(){
    return [doctorsCollection.find({"name":{$ne:"Clockcheap"}})];
});

Meteor.publish('viewAllOffersMerchantsAddMerchant', function(){
    return [doctorsCollection.find({})];
});

Meteor.publish("addPatientDetails", function(patientId){
    
        return [ patientsCollection.find({_id:patientId}) ];
    
});




Meteor.publish("addMerchantDetails", function(merchId){
    if ( this.userId ){
        return [ doctorsCollection.find({_id:merchId}) ];
    }
});

Meteor.publish("addMerchantAccount", function(merchId){
    if ( this.userId ){
        return doctorsCollection.find({_id:merchId});
    }
});

Meteor.publish("merchantProfile", function(){
    if ( this.userId ){
        var merchant = Meteor.users.findOne({_id:this.userId}).profile.merchant;
        return doctorsCollection.find({_id:merchant});
    }
});


