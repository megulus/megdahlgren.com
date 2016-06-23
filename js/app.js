// This kicks off the entire app and populates the Collections.

var app = app || {};

$(function () {

    app.AboutCollection.add({
        img: 'images/Meg_Carrickfergus_90.jpg',
        about1: 'I am a self-taught programmer. I first learned Python between semesters in graduate school because I' +
        ' had an upcoming course with a programming prerequisite. I had never programmed before, but quickly found that' +
        ' I enjoyed and had a knack for it. I found an internship writing scripts for a bioinformatics lab on campus, ' +
        'and after graduation got a job with a genomics research group where I used a lot of programming and data analysis.',
        about2: 'I took a hiatus from programming to work in another area that I am passionate about - urban planning - but ' +
        'eventually realized that I really missed the intellectual challenge of programming. Upon returning to programming, I learned JavaScript and have been ' +
        'working on front end development. My goal is to combine my two' +
        ' passions by building technology that helps cities function better.'
    });

    app.ProjectCollection.add({
        row_title: 'Single Page Apps',
        title: 'Neighborhood Map',
        img_source: 'images/nbhd-map-resize-50-comp.png',
        sourcecodelinkname: 'source code',
        sourcecode: 'https://github.com/megulus/neighborhood_map',
        hostedlinkname: 'visit site',
        hosted: 'https://megulus.github.io/neighborhood_map'
    });

    app.ProjectCollection.add({
        row_title: 'Single Page Apps',
        title: 'Calorie Tracker',
        img_source: 'images/health-tracker-resize-50-comp.png',
        sourcecodelinkname: 'source code',
        sourcecode: 'https://github.com/megulus/health-tracker',
        hostedlinkname: 'visit site',
        hosted: 'https://megulus.github.com/health-tracker'
    });

    app.TemplateCollection.add({
        row_title: 'Responsive Email Templates',
        title: 'Email Template - Outlook 2011',
        imgclass: 'template',
        img_source: 'images/ol2011-vertical-allowed-1366.png',
        sourcecodelinkname: 'source code',
        sourcecode: 'https://github.com/megulus/emailtemplates'
    });

    app.TemplateCollection.add({
        row_title: 'Responsive Email Templates',
        title: 'Email Template - iPhone 6S Plus',
        imgclass: 'template',
        img_source: 'images/iphone6splus-vertical-allowed-1366.png',
        sourcecodelinkname: 'source code',
        sourcecode: 'https://github.com/megulus/emailtemplates'
    });

    app.TemplateCollection.add({
        row_title: 'Responsive Email Templates',
        title: 'Email Template - iPhone 6',
        imgclass: 'template',
        img_source: 'images/iphone6s-vertical-allowed-1366.png',
        sourcecodelinkname: 'source code',
        sourcecode: 'https://github.com/megulus/emailtemplates'
    });

    
    

    var $appElement = $('.wrapper');
    new app.AppView({el: $appElement});
    $('#portfolio-link').click();

});