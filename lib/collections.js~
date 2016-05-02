
Messages = new Meteor.Collection("messages");
Rooms = new Meteor.Collection("rooms");
/*Files = new FS.Collection("Files", {
  stores: [new FS.Store.GridFS("Files",{})]
});*/

Uploads = new FS.Collection('upload', {
  stores: [
    //this will store files in ~/uploads folder on your filesystem
    new FS.Store.FileSystem('upload', { path: '~/upload' })
  ]
});
doctorsCollection = new Mongo.Collection('doctor_profile');
doctorsCollection.attachSchema( new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    address: {
        type: String,
        label: "Address",
        max: 1000
    },
    contactDetails: {
        type: String,
        label: "Contact Details",
        max: 100
    },
    id: {
        type: String,
        label: "Username"
    },
   /* profileImageLocation: {
        type: String,
        label: "Profile Picture (Logo)",
        optional: true,
    },*/
   /* password: {
        type: String,
        label: "password",
        minCount : 8
    },*/
    age: {
        type: Number,
        label: "Age"
    },
    gender: {
        type: String,
        label: "Gender"
    },
    qualification: {
        type: String,
        label: "Qualification"
    },
    specialization: {
        type: String,
        label: "Specialization"
    },
   availt:{
	type:String,
	label:"Available Time"
	}
}));
symptomsCollection = new Mongo.Collection('Symptoms-change');
appointmentsCollection = new Mongo.Collection('appointments-c');
/*symptomsCollection.attachSchema(new SimpleSchema({
    username:{
	type: String,
	label: "Username"
	optional: true
    },
   doctorName: {}
    symptoms: {
  	type: String,
	label: "Symptoms"
    },
    category: {
	type: String,
	label: "category"
    },
  picture: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "cfs-file",
        collection: "Files"
      }
    }
  }

}));*/
patientsCollection = new Mongo.Collection('patient_profile');
patientsCollection.attachSchema( new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    address: {
        type: String,
        label: "Address"
    },
    contactDetails: {
        type: String,
        label: "Contact Details"
    },
    gender: {
        type: String,
        label: "Gender",
        allowedValues: ["M","F"]
    },
    
   user: {
        type: String,
        label: "Username"
    },
    age: {
        type: Number,
        label: "Age"
    },
    bloodgroup: {
	type: String,
	label: "BloodGroup"
    },
    caseHistory: {
	type: String,
	label: "Case History"
    }
}));

/*Files.allow({
  insert: function(userId,doc) {
    return true;
  },
  update: function(userId, doc, fieldNames, modifier) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});*/

patientsCollection.allow({
    insert: function(userId){
        return true;
    }
});

symptomsCollection.allow({
	insert: function(userId,doc){
		return true;
	},
	update: function(userId,doc){
		return true;
	}
});
appointmentsCollection.allow({
	insert: function(userId,doc){
		return true;
	},
	update: function(userId,doc){
		return true;
	}
});

doctorsCollection.allow({
    insert: function(userId, doc){
        if (userId){
            if (Roles.userIsInRole(userId,['siteadmin'])){
                return true;
            }
        }
        return false;
    },
    update: function(userId,doc){
        if (userId) {
            if ( Roles.userIsInRole(userId,['merchant']) ){
                var merchId = Meteor.users.findOne({_id:userId}).profile.merchant;
                if (doc._id == merchId ){
                    return true;
                }
            }
            else if ( Roles.userIsInRole(userId,['siteadmin']) ){
                return true;
            }
        }
        return false;
    }
});
Rooms.deny({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  Messages.deny({
    insert: function (userId, doc) {
      return (userId === null);
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  Messages.allow({
    insert: function (userId, doc) {
      return (userId !== null);
    }
  });

Uploads.allow({
    insert: function(userId, doc) {
      //TODO validate if user can insert a file
      return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
      //TODO validate if user can update a file
      return true;
    },
    remove: function(userId, doc) {
      //TODO validate if user can remove a file
      return true;
    },
    //you would get access denied without this download allow option
    //http://stackoverflow.com/questions/26136850/collectionfs-access-denied-403-error-meteor-js
    download: function(userId, doc) {
      //TODO validate if user can download a file
      return true;
    }
  });

SimpleSchema.messages({  
  "incorrectUserID": "Incorrect User ID",
  "userNotVerified": "User Not Verified",
  "userPassedValidity": "User has passed the verification validity",
  "couldNotValidate": "User verification details could not be validated",
  "errorObtainingDetails":"Could not find user or error obtaining profile details",


});


