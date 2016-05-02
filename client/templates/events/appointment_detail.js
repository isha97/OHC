Template.AppointmentDetailTemplate.events({
     "submit .new-appoint": function (event) {
       event.preventDefault();
 	 var parts= location.href.split('/');
	var id= parts.pop();
	var user_1 = Meteor.user().username;
    var dat=event.target.dateinput.value;
	var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var m1=dat.substring(0,2);
var d1=dat.substring(3,5);
var y1=dat.substring(6,11);
var hr=dat.substring(11,13);
var mins=dat.substring(14,16);
var ampm=dat.substring(17,19);
	var ud=parseInt(d1,10);
var md=parseInt(m1,10);
var yd=parseInt(y1,10);

var hh=parseInt(hr,10);
var mis=parseInt(mins,10);

if(ampm.localeCompare("PM")==0)
	hh = hh+12;

var datecheck=new Date(yd,md-1,ud,hh,mis,00);
console.log(datecheck);
console.log(today);
if(datecheck<today)
	{sAlert.error('Invalid date! Please fill again.', {effect: 'slide',opacity:'1', position: 'bottom-right',  onRouteClose: false, stack: false, offset: '80px'});}
else
{
       appointmentsCollection.insert({
         pname: user_1,
         dname: id,
         status: 'Pending',
	 date_req:  dat
       });
 	
     
	sAlert.success('Appointment request sent!', {effect: 'slide',opacity:'1', position: 'bottom-right',  onRouteClose: false, stack: false, offset: '80px'});
}
}
   });

Template.AppointmentDetailTemplate.rendered = function(){
    $('.datetimepicker').datetimepicker();
};
