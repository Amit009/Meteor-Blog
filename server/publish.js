
Meteor.publish('blogs', function() {
	return blog.find({});
});