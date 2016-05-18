blog = new Mongo.Collection('blogs');


// secure allow to insert data
blog.allow({
	insert: function (userId, doc) {
		return !!userId;
	}
});

// blog schema
blogSchema = new SimpleSchema({
	title: {
		type:String,
		label:"Title"
	},

	desc: {
		type:String,
		label:"Description",
		min: 20,
      	max: 1000,
      	autoform: {
         	rows: 5
      	}
	},

	date: {
		type:Date,
		label:"Post Date",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type:"hidden"
		}
	},

	author: {
		type:String,
		label:"Author"
	},

	tags: {
	      type: Array,
	      optional: true,
	      minCount: 1,
	      maxCount: 4,
	      label:"Post Tags",
	   },
	   "tags.$": {
	      type: String,
	      optional: true
	   }
});

blog.attachSchema( blogSchema );