
FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('homePage')
	}
});

FlowRouter.route('/home/:id', {
	name: 'singleblog',
	action() {
		BlazeLayout.render('singlePage');
	}
});

FlowRouter.route('/about', {
	name: 'about',
	action() {
		BlazeLayout.render('aboutPage')
	}
});

FlowRouter.route('/admin/', {
	name: 'admin',
	action() {
		BlazeLayout.render('adminPage');
	}
});