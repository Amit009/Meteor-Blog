Meteor.subscribe('blogs');

// home page blog list
Template.homePage.helpers({
	blogs:function() {
		return blog.find({});
	}
})