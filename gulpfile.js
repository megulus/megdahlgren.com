var gulp = require('gulp'),
    mainBowerFiles = require('gulp-bower'),
    awspublish = require('gulp-awspublish'),
    usemin = require('gulp-usemin'),
    minifyhtml = require('gulp-htmlmin'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    debug = require('gulp-debug');





gulp.task('bower', function () {
    return mainBowerFiles('./bower_components')
        .pipe(gulp.dest('build/bower_components'))
});


gulp.task('build', ['bower', 'images', 'usemin']);

gulp.task('usemin', function() {
    return gulp.src('*.html')
        .pipe(usemin({
            html: [minifyhtml({ collapseWhitespace: true })],
            css: [cleancss({ compatibility: 'ie8' })],
            js: [uglify(), 'concat']
        }))
        .pipe(debug({ title: 'usemin-debug' }))
        .pipe(gulp.dest('build'))
});

gulp.task('images', function() {
    return gulp.src(['./images/*.png', './images/*.jpg', './images/*.ico'])
        .pipe(debug({ title: 'images-debug' }))
        .pipe(gulp.dest('build/images'))
});

gulp.task('publish', function () {

    // create a new publisher using S3 options
    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
    var publisher = awspublish.create({
        params: {
            Bucket: 'megdahlgren.com'
        }
    });

    var headers = {};

    return gulp.src('build/**')
        .pipe(publisher.publish(headers))

        // create a cache file to speed up consecutive uploads
        .pipe(publisher.cache())

        // print upload updates to console
        .pipe(awspublish.reporter());
});

gulp.task('default', ['build']);