var fileId;
Template.requestDoctorTemplate.events({
     "submit .new-symptom": function (event) {
       event.preventDefault();
 
       
       var cat = event.target.category.value;
	//var userid = event.target.userid.value;
	var symp = event.target.symptoms.value;
	Session.set('CurrentSymp',symp);
 	var currentUserId = Meteor.userId();
	var user_1 = Meteor.user().username;
       //console.log(currentUserId);
	console.log(user_1);
       symptomsCollection.insert({
         name: user_1,
         userId: currentUserId,
         category: cat,
	 symptom: symp,
	 file: fileId
       });
 	/*var chk = symptomsCollection.findOne(userId:currentUserId);
	console.log("check!");
	console.log(userName.chk);*/
      
       //event.target.userid.value = "";
	event.target.category.value = "";
	event.target.symptoms.value = "";
     },
	'change input[type="file"]': function(evt) {
      console.log('changed');
      FS.Utility.eachFile(evt, function(file) {
        var fileObj = new FS.File(file);
        fileObj.customProperty = 'hmmm';
        fileId = Uploads.insert(fileObj, function(err) {
          //console.log(err);
        });
	console.log(fileId);
	//session.set('ImageId',fileId);
	//console.log('ImageId');
      });
    }
   });

