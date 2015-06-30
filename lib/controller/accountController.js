Router.route('/login', function(){
	this.render('account_login');
	Template.account_login.events({
		"submit #login-form": function(e, t) {
			e.preventDefault();
			var email = t.find('[name="email"]').value;
			var password = t.find('[name="password"]').value;
			console.log(email,password);
			Accounts.callLoginMethod({
			});
			return false;
		}
	});
});

Router.route('/sign-up', function() {
	this.render('account_sign_up');
	Template.account_sign_up.events({
		"submit #sign-up-form": function(e, t) {
			e.preventDefault();
			Accounts.createUser({
				username: t.find('[name="username"]').value,
				email: t.find('[name="email"]').value,
				password: t.find('[name="password"]').value
			});

			Router.go('/login');
		}
	});
})


