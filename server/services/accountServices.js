Accounts.registerLoginHandler( function(loginRequest) {
	console.log(loginRequest[0]);
	HTTP.call('GET',
		baseService.buildAPIURL() + '/user/details',
		{auth: ""},
		function(err, result){
			if(err) {
				console.log(err);
				//Router.redirect('/sign-up');
			} else {

				//Router.redirect('/login');
			}
		}
	);
});
Meteor.methods({
	apiLogin: function(credentials) {

	}
})
