
// seems like overkill to have a collection for one model,
// but this is how backbone does things

var app = app || {};

var AboutCollection = Backbone.Collection.extend({
    
    model: app.About
    
});

app.AboutCollection = new AboutCollection();

