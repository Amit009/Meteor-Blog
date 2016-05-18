
Template.singlePage.helpers({
	blogsingle:function() {
		var id = FlowRouter.getParam('id');
		return blog.findOne({_id: id});
	}
})