
// view for about model

var app = app || {};

app.AboutView = Backbone.View.extend({

    template: _.template($('#about').html()),

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },
    
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});