var TodoView = Backbone.View.extend({
	
	template: _.template('<h3><%= description %><h3>'),


	render: function(){
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
	}

});

var todoView = new TodoView({ model: todoItem 	})
	todoView.render();
	console.log(todoView.el);