const gulp = require('gulp');
const babelify = require('babelify');
const rename = require("gulp-rename");
const source = require('vinyl-source-stream');
const copy = require('gulp-copy');
const browserify = require('browserify');


gulp.task('js', function() {
	var b = browserify({
		entries: './app/scripts/person.js',
		debug: true,
		extensions: ['.js'],
		transform: [["babelify", {presets: ["es2015"]}]]
	});
	return b.bundle()
		.pipe(source('person.js'))
		.pipe(rename('script.js'))
		.pipe(gulp.dest('dist/'))
});

gulp.task('addJs', function() {
	var b = browserify({
		entries: './app/add_scripts.js',
		debug: true,
		extensions: ['.js'],
		transform: [["babelify", {presets: ["es2015"]}]]
	});
	return b.bundle()
		.pipe(source('add_scripts.js'))
		.pipe(gulp.dest('dist/'))
});

gulp.task('copyHtml', function() {
	gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
});

gulp.task('watch', ['js', 'addJs', 'copyHtml'], function() {
	gulp.watch('app/*.html', ['copyHtml']);
	gulp.watch('app/scripts/*/**.js', ['js']);
});