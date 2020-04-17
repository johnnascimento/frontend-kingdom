var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel');


gulp.task('build', function() {
    return gulp.src('js/test.js')
                .pipe(babel({
                    presets: ['@babel/preset-env']
                }))
                .pipe(gulp.dest('js/minJs'));
});

gulp.task('default', async function() {
    gulp.src('js/minJs/test.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/minJs/minified'));
});