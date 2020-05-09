var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    server = require('gulp-webserver'),
    livereload = require('gulp-livereload');

// CoOnsole log function
// function errorLog(error) {
//     console.error.bind(error);
//     this.emit('end');
// }

// Gulp webserver
// ______________________________________
gulp.task('server', function() {
  gulp.src('./')    // <-- your app folder
    .pipe(server({
      livereload: true,
      open: true,
      port: 35730    // set a port to avoid conflicts with other local apps
    }));
});


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
                .on('error', console.error.bind(console))
                .pipe(gulp.dest('js/minJs/minified'))
                .pipe(livereload());
});

// Styles task
// Uglifies
// ______________________________________
gulp.task('styles', function() {
    console.log('Styles is being invoked');
    return gulp.src('css/style.scss')
                .pipe(
                    sass(
                        { outputStyle: 'compressed' }
                    )
                )
                .on('error', console.error.bind(console))
                .pipe(gulp.dest('css/'))
                .pipe(livereload());
});


// Watch task
// Js
// ______________________________________
gulp.task('watch', async function() {
    gulp.watch('js/app/*.js', gulp.series('scripts'));
    gulp.watch('css/**/*.scss', gulp.series('styles'));
})

gulp.task('default',
    gulp.series(
        'clean-styles',
        'clean-scripts',
        gulp.parallel('styles', 'scripts'),
        'watch',
        'server'
    )
);