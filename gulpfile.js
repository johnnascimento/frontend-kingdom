var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-ruby-sass');

// Clean task
// Delete files and folders related to js
// ______________________________________
gulp.task('clean-scripts', function() {
    console.log('Cleaning scripts');
    return gulp.src('js/minJs/minified/*.js')
            .pipe(clean({force: true}));
});

// Clean task
// Delete files and folders related to css
// ______________________________________
gulp.task('clean-styles', function() {
    console.log('Cleaning styles');
    return gulp.src('css/assets/minified/*.css')
            .pipe(clean({force: true}));
});

// Scripts task
// Uglifies
// ______________________________________
gulp.task('scripts', function() {
    console.log('Scripts is being transpiled and uglified');
    return gulp.src('js/app/*.js')
                .pipe(babel({
                    presets: ['@babel/preset-env']
                }))
                .pipe(uglify())
                .pipe(gulp.dest('js/minJs/minified'));
});

// Styles task
// Uglifies
// ______________________________________
gulp.task('styles', function() {
    console.log('Styles is being invoked');
    return sass('./css/**/*.scss')
                .on('error', function(err) {
                    console.log(err.message);
                })
                .pipe(gulp.dest('css/assets/cssConverted'));
});


// Watch task
// Js
// ______________________________________
gulp.task('watch', function() {
    return gulp.watch('js/app/*.js', gulp.series('scripts'));
})

gulp.task('default',
    gulp.series(
        'clean-styles',
        'clean-scripts',
        gulp.parallel('styles', 'scripts'),
        'watch'
    )
);