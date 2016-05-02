Template.CheckStatusTemplate.helpers({
    appstatus: function () {
	var currentUsername = Meteor.user().username;
      return appointmentsCollection.find({pname:currentUsername});
    }
  });
