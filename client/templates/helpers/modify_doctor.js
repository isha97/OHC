Template.modifyMerchantTemplate.helpers({
	'merchant': function() {
        return doctorsCollection.findOne();
    }
});
