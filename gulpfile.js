var gulp = require('gulp');
var bower = require('gulp-bower');
var awspublish = require('gulp-awspublish');

gulp.task('bower', function () {
    return bower('build/bower_components');
});

gulp.task('css', function () {
    return gulp.src('./css/**/*.css', {'base': '.'})
        .pipe(gulp.dest('./build/'));
});

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['bower', 'css', 'html']);

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