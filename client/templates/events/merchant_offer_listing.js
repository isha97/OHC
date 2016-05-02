Template.merchantOfferListingTemplate.events({
    'click #fs': function(event){
        if (this.isActive) {
            Meteor.call("deactivateOffer", this._id);
        }
        else {
            Meteor.call("activateOffer", this._id);
        }


    } 
});