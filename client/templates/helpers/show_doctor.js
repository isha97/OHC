Template.showMerchantTemplate.helpers({
	merchant_profile: function(){
		var sortValue = Session.get('sort') || 1;
    		return doctorsCollection.find({}, {sort: {name: sortValue}});  
	}
});
Template.showMerchantTemplate.events({
  "click .toggle": function () {
    var sortValue = Session.get('sort') || 1;
    Session.set('sort', sortValue * -1);
  }
});

