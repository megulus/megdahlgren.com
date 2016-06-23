// view for entire application

var app = app || {};

app.AppView = Backbone.View.extend({


    events: {

        'click #portfolio-link': 'displayPortfolio',
        'click #about-link': 'displayAbout'
    },

    initialize: function () {

        this.$main = $('#main-content');
        this.$templates = $('#templates');
        this.$projectheadline = $('#app-headline');
        this.$emailheadline = $('#email-headline');
    },

    displayPortfolio: function () {

        var that = this;
        that.$main.html('');
        that.$templates.html('');
        var $header1 = $('<h2>Single Page Apps</h2>');
        that.$main.append($header1);
        var $header2 = $('<h2>Responsive Email Templates</h2>');
        that.$templates.append($header2);
        app.ProjectCollection.each(function (each) {
            var view = new app.ProjectView({model: each});
            that.$main.append(view.render().$el);
        });
        app.TemplateCollection.each(function(each) {
            var view = new app.ProjectView({model: each});
            that.$templates.append(view.render().$el);
        });
        $('#portfolio-link').addClass('active');
        $('#about-link').removeClass('active');
    },


    displayAbout: function () {

        var view = new app.AboutView({model: app.AboutCollection.at(0)});
        this.$main.html('');
        this.$templates.html('');
        this.$main.append(view.render().$el);
        $('#portfolio-link').removeClass('active');
        $('#about-link').addClass('active');
    }

});