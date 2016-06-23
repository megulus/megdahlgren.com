
// collection for apps

var app = app || {};

var ProjectCollection = Backbone.Collection.extend({

    model: app.Project

});

app.ProjectCollection = new ProjectCollection();
app.TemplateCollection = new ProjectCollection();