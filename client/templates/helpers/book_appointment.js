Template.BookAppointmentTemplate.helpers({
	merchant_profile: function(){
		var sortValue = Session.get('sort') || 1;
    		return doctorsCollection.find({}, {sort: {name: sortValue}});  
	}
});
Template.BookAppointmentTemplate.events({
  "click .toggle": function () {
    var sortValue = Session.get('sort') || 1;
    Session.set('sort', sortValue * -1);
  }
});
