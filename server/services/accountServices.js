Meteor.methods({
	apiLogin: function(credentials) {
		HTTP.post(baseService.buildAPIURL(),
		credentials,
		function(err, result){
			if(err) {
				//Router.redirect('/sign-up');
			} else {
				console.log(credentials,result);
				//Router.redirect('/login');
			}
		});
	}
})
