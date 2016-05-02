Template.merchantOfferListingTemplate.helpers({
   'merchantActiveOffers': function(){
        var res = offersCollection.find({isActive:true, isFixed:false});
        if (res && res.count() > 0){
            return res;
        }
        return false;
   },
   'merchantInactiveOffers': function(){
        var res = offersCollection.find({isActive:false, isFixed:false});
        if (res && res.count() > 0){
            return res;
        }
        return false;
   },
   'merchantFixedOffers': function(){
        var res = offersCollection.find({isFixed:true});
        if (res && res.count() > 0){
            return res;
        }
        return false;
   },
   'merchantNonFixedOffers': function(){
        var res = offersCollection.find({isFixed:false});
        if (res && res.count() > 0){
            return res;
        }
        return false;
   }
});
