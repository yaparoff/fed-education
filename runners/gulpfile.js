var gulp = require('gulp');
var	sass = require('gulp-sass');
var copy = require('gulp-copy');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
//var browserify = require('gulp-browserify');

gulp.task('sass', function() {
	return gulp.src('src/styles/app.scss')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer(['last 5 versions', '>1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/'))
});

//gulp.task('scripts', function() {
//	gulp.src('src/scripts/app.js')
//	.pipe(browserify({
//		
//	}))
//})

gulp.task('copyHtml', function() {
	gulp.src('src/*.html')
	.pipe(gulp.dest('build'))
});

gulp.task('copyImage', function() {
	gulp.src('src/img/*')
	.pipe(gulp.dest('build/img'))
});

gulp.task('webserver', function() {
	gulp.src('build')
	.pipe(webserver({
		livereload: true,
		directoryListing: true,
		open: true
	}));
});

gulp.task('watch', ['webserver', 'sass', 'copyHtml', 'copyImage'], function() {
	gulp.watch('src/styles/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHtml']);
//	gulp.watch('src/scripts/*.js', )
});