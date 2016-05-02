Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'
});

Router.route('/', function () {
    this.render('landingPageTemplate');
    }, {
        name: 'landingRoute'
    });
Router.route('/regpatient', function () {
    this.render('NewPatientTemplate');
    }, {
        name: 'Insertinpatient',
      waitOn: function(){
        	return Meteor.subscribe("Insertinpatient");
	}
        
    });
Router.route('/requestdoctor', function () {
    this.render('requestDoctorTemplate');
    }, {
        name: 'requestDoctor',
       waitOn: function(){
		return Meteor.subscribe("RequestDoctor");
	}
    });
Router.route('/viewpatientrequests', function () {
    this.render('viewPatientRequestTemplate');
    }, {
        name: 'patientrequests',
       waitOn: function(){
		return Meteor.subscribe("PatientRequests");
	}
    });
Router.route('/patient/profile', function () {
    this.render('PatientProfileTemplate');
    }, {
        name: 'patientprofile',
       waitOn: function(){
		return Meteor.subscribe("patientprofile");
	}
    });
Router.route('/doctor/profile', function () {
    this.render('DoctorProfileTemplate');
    }, {
        name: 'doctorprofile',
       waitOn: function(){
		return Meteor.subscribe("doctorprofile");
	}
    });
/*Router.route('/patientregister', function () {
    this.render('PatientRegisterTemplate');
    }, {
        name: 'patientRegister',
        waitOn: function(){
            return Meteor.subscribe("viewAllOffersMerchantsAddMerchant");
        }
    });*/
Router.route('/showmerchant', function(){
    this.render('showMerchantTemplate');
    },
    {
        name: 'showMerchant',
        waitOn: function(){
		if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'siteadmin'))
                return Meteor.subscribe("showMerchant");
    }
});
Router.route('/livechat', function(){
    this.render('chat');
    },
    {
        name: 'chat',
        waitOn: function(){
                return Meteor.subscribe("livechat");
    }
});
Router.route('/bookappointments', function(){
    this.render('BookAppointmentTemplate');
    },
    {
        name: 'bookAppointment',
        waitOn: function(){
		if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'patient'))
                return Meteor.subscribe("bookAppointment");
    }
});
Router.route('/showmerchant/:merchant',function(){
    this.render('modifyMerchantTemplate', {data: {merchantId: this.params.merchant}});
}, {
    name: "modifymerchant",
    waitOn: function(){
	if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'siteadmin'))
        return Meteor.subscribe("modifymerchant", this.params.merchant);
    }
});
Router.route('/viewpatientprofile/:patient',function(){
    this.render('viewPatientDetailsTemplate');
}, {
    name: "viewdetails",
    waitOn: function(){

        return Meteor.subscribe("viewdetails", this.params.patient);
    }
});
Router.route('/appointmentdetail/:appoint',function(){
    this.render('AppointmentDetailTemplate');
}, {
    name: "appdetails",
    waitOn: function(){

        return Meteor.subscribe("appdetails");
    }
});
Router.route('/checkstatus',function(){
    this.render('CheckStatusTemplate');
}, {
    name: "appstts",
    waitOn: function(){

        return Meteor.subscribe("appstts");
    }
});
Router.route('/viewappointments',function(){
    this.render('ViewAppointmentTemplate');
}, {
    name: "viewapp",
    waitOn: function(){

        return Meteor.subscribe("viewapp");
    }
});


Router.route('/merchant', function(){
    this.redirect('merchantLoginRoute');
    this.stop();
});

Router.route('/logindoctor',function () {
    this.render('merchantLoginTemplate');
    }, {
        name: 'merchantLoginRoute',
        onBeforeAction: function(){
            if (Meteor.user()) {
                // User logged in... Move into landing...
                this.redirect('merchantLandingRoute');
                this.stop();
            }
            else {
                this.next();
            }
        }
});

Router.route('/loginpatient',function () {
    this.render('patientLoginTemplate');
    }, {
        name: 'patientLoginRoute',
        onBeforeAction: function(){
            if (Meteor.user()) {
                // User logged in... Move into landing...
                this.redirect('patientLandingRoute');
                this.stop();
            }
            else {
                this.next();
            }
        }
});

Router.route('/merchant/landing',function(){
    this.render('merchantLandingTemplate');
    },
    {
        name: 'merchantLandingRoute',
        waitOn : function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(), ['merchant']) ){
                return Meteor.subscribe('merchantOffersListing');
            }
        }
    });
Router.route('/patient/landing',function(){
    this.render('patientLandingTemplate');
    },
    {
        name: 'patientLandingRoute',
        waitOn : function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(), ['patient']) ){
                return Meteor.subscribe('patientOffersListing');
            }
        }
    });

Router.route('/error',function(){
        this.render('somethingWentWrongTemplate');
    },
    {
        name: 'somethingWentWrongRoute'
    }
);
Router.route('/addmerchant',function(){
    this.render('addMerchantTemplate');
    },
    {
        name: 'addMerchantRoute',
        waitOn: function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'siteadmin'))
                return Meteor.subscribe("viewAllOffersMerchantsAddMerchant");
        }
    }
    );




Router.route('/addpatientaccount/:patient',function(){
        this.render("addPatientAccountTemplate",{data: {patientId: this.params.patient}});
    },
    {
        name: "addPatientAccountRoute",
        waitOn: function(){
          //  if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'patient'))
                return Meteor.subscribe("addPatientDetails", this.params.patient);
        }
    }
    );

Router.route('/addmerchantaccount/:merchant',function(){
        this.render("addMerchantAccountTemplate",{data: {merchantId: this.params.merchant}});
    },
    {
        name: "addMerchantAccountRoute",
        waitOn: function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(),'siteadmin'))
                return Meteor.subscribe("addMerchantDetails", this.params.merchant);
        }
    }
    );



Router.route('/merchant/profile',function(){
    this.render("viewMerchantProfileTemplate");
    },
    {
        name: "merchantProfileRoute",
        waitOn: function(){
            if (Meteor.user() && Roles.userIsInRole(Meteor.user(), ['merchant']) ){
                return Meteor.subscribe("merchantProfile");
            }
        }
    });
















