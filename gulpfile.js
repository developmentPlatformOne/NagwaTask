var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps')
var livereload = require('gulp-livereload');

gulp.task('css', function(cb) {
    return gulp.src('src/scss/style-ar.scss')
	.pipe(sourcemaps.init())
    .pipe(sass())
	.pipe(prefix('last 2 versions'))
	.pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
	.pipe(livereload()),
    cb();
})

gulp.task('watch', function() {
    require('./server.js');
    livereload.listen();
    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
});