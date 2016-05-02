Template.requestDoctorTemplate.helpers({
details: function () {
	var currentUserId = Meteor.userId();
	console.log("hello!");
	console.log(currentUserId);
	var user_1 = Meteor.user().username;
	console.log(user_1);
      return symptomsCollection.find({userId:currentUserId});
    },
recommend: function () {
	var current = Session.get('CurrentSymp');
      return symptomsCollection.find({$and:[{symptom:current},{doctor:{$exists:true}}]});
    }
});
