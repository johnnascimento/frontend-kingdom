var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    amdOptimize = require('amd-optimize'),
    concat = require('gulp-concat'),
    server = require('gulp-webserver'),
    livereload = require('gulp-livereload'),
    path = require('path'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer');

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
    return gulp.src('js/build/app/*.js')
            .pipe(clean({force: true}));
});

// Clean task
// Delete files and folders related to css
// ______________________________________
gulp.task('clean-styles', function() {
    console.log('Cleaning styles');
    return gulp.src('css/build/*.css')
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
                .pipe(gulp.dest('js/build/app'))
                .pipe(livereload());
});

// Scripts task
// Bundle require js's files
// ______________________________________
gulp.task('bundleJs', function (scripts) {
    gulp.src('./js/app.js')
        .pipe(amdOptimize("app",
            {
                name: "app",
                configFile: "./js/app.js",
                baseUrl: './js/build/app'
            }
        ))
        .pipe(concat('appConcat.js'))
        .pipe(gulp.dest('./js/build/app/bundle'));
});

// Styles task
// Uglifies
// ______________________________________
gulp.task('styles', function() {
    console.log('Styles is being invoked');
    return gulp.src('css/style.scss')
                .pipe(
                    sass(
                        { outputStyle: 'extended' }
                    )
                )
                .on('error', console.error.bind(console))
                .pipe(autoprefixer('last 2 versions', 'IE 11'))
                .pipe(gulp.dest('css/build/'))
                .pipe(livereload());
});

// Image task
// Compress images
// ______________________________________
gulp.task('compressImg', function() {
    return gulp.src('images/*')
        .pipe(imagemin({
            verbose: true
        }))
        .pipe(gulp.dest('images/compressed'));
})

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