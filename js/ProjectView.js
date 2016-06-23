
// view for a single project

var app = app || {};

app.ProjectView = Backbone.View.extend({

    template: _.template($('#project').html()),

    events: {},

    initialize: function() {
        this.listenTo(this.model, 'change', this.render)
    },

    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});

