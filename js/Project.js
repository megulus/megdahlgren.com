
// model for a project

var app = app || {};

app.Project = Backbone.Model.extend({
   
    defaults: {
        row_title: '',
        title: '',
        imgclass: '',
        img_source: '',
        sourcecodelinkname: 'source code',
        sourcecode: '',
        hostedlinkname: '',
        hosted: ''
    }
    
});