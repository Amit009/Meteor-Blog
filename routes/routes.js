
if(Meteor.isClient) {
	Accounts.onLogin(function() {
		FlowRouter.go('admin');
	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	});
}


FlowRouter.route('/admin', {
	name: 'admin',
	action() {
		if(Meteor.userId()) {
			BlazeLayout.render('adminPage');
		} else {
			BlazeLayout.render('pleaseLogin');
		}
		
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('aboutPage')
	}
});

FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('homePage');
	}
});

FlowRouter.route('/:id', {
	name: 'singleblog',
	action() {
		BlazeLayout.render('singlePage');
	}
});


