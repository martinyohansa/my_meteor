Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'base'
}).onBeforeAction(function(pause) {
	if(! Meteor.userId() && Router.current().route.getName() !== 'sign-up' && Router.current().route.getName() !== 'login') {

		this.layout('public_base');
		this.redirect('/login');
	} else {
		this.next();
	}
}, {except: ['login','sign-up']});

Router.route('/', function() {
	this.render('account_login');
})
