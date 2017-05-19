/* ======================================================================================================
* Plugins utilizados
* ======================================================================================================*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();



/* ======================================================================================================
* Tarefa sobre os Estilos
* ======================================================================================================*/
gulp.task('styles', function () {
    gulp.src("./src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe( sass({
            includePaths: require('node-bourbon').includePaths,
            style: 'compressed',
          })
    ).on('error', notify.onError(function (error) {
       return 'Error al compilar sass.\n Detalles en la consola.\n' + error;
    }))
   .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
   .pipe(sourcemaps.write('./maps'))
   .pipe(gulp.dest("./dist/css/"))
   .pipe(notify({ title: "SASS", message: "OK: Archivo compilado" }))
   .pipe(browserSync.stream());
});



/* ======================================================================================================
* Tarefa sobre os Scripts
* ======================================================================================================*/
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});



/* ======================================================================================================
* Browser Sync
* ======================================================================================================*/
gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        files: ['*.html', './dist/**/*.{html,css,js}'],
        server: "./",
    });
});



/* ======================================================================================================
* Tarefa por default
* ======================================================================================================*/
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', ['styles']); // Vigila cambios en los estilos
    gulp.watch('./src/js/*.js', ['scripts']);
});



/* ======================================================================================================
* Default Task
* ======================================================================================================*/
gulp.task('default', ['styles', 'browser-sync', 'watch',]);