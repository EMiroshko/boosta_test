var gulp = require('gulp');
var gulpSass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./style.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'sass' ]);
