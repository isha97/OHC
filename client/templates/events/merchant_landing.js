Template.merchantLandingTemplate.events({
    'click #addOfferButton': function(event){
        Router.go('merchantAddOfferRoute');
    },
    'click #deleteOfferButton': function(event){
        event.preventDefault();
        
        offersCollection.update({_id:this._id},{$set: {isDeleted: true}});

        Router.go('/merchant/landing');
    },
    'click #toggleActiveOfferButton': function(event){
        event.preventDefault();

        if (this.isActive){
            // We need to deactivate
            offersCollection.update({_id:this._id}, {$set: {isActive: false}, $push: {deactivatedOn: (new Date())}});
        }
        else {
            // We need to activate
            offersCollection.update({_id:this._id}, {$set: {isActive: true}, $push: {activatedOn: (new Date())}});
        }
    },
    'click #editOfferButton': function(event){
        event.preventDefault();
        Router.go('/merchant/editoffer/'+this._id);
    }
});