Router.route('/login', function(){
	this.render('account_login');
	Template.account_login.events({
		"submit #login-form": function(e, t) {
			e.preventDefault();
			var email = t.find('[name="email"]').value;
			var password = t.find('[name="password"]').value;

			Meteor.loginWithPassword(email, password, function(err) {
				if(err) {
					console.log(err);
				} else {

				}
			});

			return false;
		}
	});

});

Router.route('/sign-up', function() {

	this.render('account_sign_up');
})

