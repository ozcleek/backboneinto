var TodoItem = Backbone.Model.extend({
	defaults : {
		description: 'Empty todo..',
		status: 'incomplete'
	}



});

var todoItem = new TodoItem({
	});

