Meteor.startup(function () {
    sAlert.config({
        effect: '',
        position: 'bottom',
        timeout: 2000,
        html: true,
        onRouteClose: true,
        stack: false,
        offset: 0
    });


    Uploader.finished = function(index, fileInfo, templateContext) {
        Session.set("ImageReady",true);
        //console.log(fileInfo);
        Session.set("imageUrl","http://d2scard.com/upload/"+fileInfo.name);
        sAlert.success("Uploaded",{onRouteClose:false});
    }

    Hooks.init();
});

Meteor.startup(function() {
    reCAPTCHA.config({
        publickey: '6LeS6gkTAAAAAGq8MB9h_zoN9wuw-vgUTL56T95u'
    });
});
AutoForm.hooks({
  insertOfferForm : {
    
    before: {
        insert: function(doc) {
            doc.merchant = Meteor.user().profile.merchant;
            doc.createdAt = new Date();
            doc.createdBy = Meteor.user()._id;
            doc.activatedOn = [new Date()];
            return doc;
        }
    },
    after : {
        insert: function(error, result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                Router.go('/merchant/offer/'+result+'/addimage');
            }
        }
    }
  },

  updateOfferForm: {
    before:{
        update: function(doc){
            doc.$set['lastUpdatedOn'] = new Date();
            return doc;
        }
    },
    after: {
        update: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Updated successfully', {onRouteClose:false});
                Router.go('/merchant/landing');
            }
        }
    }
  },

  insertDocForm: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
              // if ( doctorsCollection.findOne({_id:result}).type == "offline" )
                    Router.go('/addmerchantaccount/{{_id}}');
               // else 
                 //   Router.go('/addmerchantfixeddiscount/'+result);
            }
        }
    }
  },
  insertPatForm: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
              // if ( doctorsCollection.findOne({_id:result}).type == "offline" )
                    Router.go('/addpatientaccount/{{_id}}');
               // else 
                 //   Router.go('/addmerchantfixeddiscount/'+result);
            }
        }
    }
  },
  updateMerchForm: {
    after: {
        update: function(error,result) {
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Changes made successfully');
            }
        }
    }
  },

  insertMerchantLocationsForm: {
    after: {
        insert: function(error,result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
                var merch = merchantLocationsCollection.findOne({_id:result}).merchant;
                Router.go('/addmerchantlocations/'+merch);
            }
        }
    }
  },

  insertFixedOfferForm: {
    before: {
        insert: function(doc) {
            doc.createdAt = new Date();
            doc.createdBy = Meteor.user()._id;
            doc.activatedOn = [new Date()];
            doc.isFixed = true;
            return doc;
        }
    },
    after: {
        insert: function(error, result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
            }
        }
    }
  },

  insertAvailOfferForm: {
    before: {
        insert: function(doc) {
            doc.time = new Date();
            return doc;
        }
    },
    after: {
        insert: function(error, result){
            if (error){
                sAlert.error(error.message);
            }
            else {
                sAlert.success('Added successfully',{onRouteClose:false});
            }
        }
    }
  }

});

Hooks.onLoggedOut = function (userId) {
    //console.log("Logged out...");
    Router.go('/merchant/')
}
