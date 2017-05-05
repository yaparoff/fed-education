var gulp = require('gulp');
var	sass = require('gulp-sass');
var copy = require('gulp-copy');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');


gulp.task('sass', function() {
	return gulp.src('app/styles/style.scss')
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(sass())
	.pipe(autoprefixer(['last 5 versions', '>1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(sourcemaps.write(''))
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('normalize', function() {
	gulp.src('app/styles/normalize.css')
	.pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('copyHtml', function() {
	gulp.src('app/*.html')
	.pipe(gulp.dest('dist'))
});

gulp.task('img', function() {
	return gulp.src('app/img/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'))
});

gulp.task('webserver', function() {
	gulp.src('dist')
	.pipe(webserver({
		livereload: true,
		directoryListing: false,
		open: true
	}));
});


gulp.task('watch', ['webserver', 'normalize', 'sass', 'img', 'copyHtml'], function() {
	gulp.watch('app/styles/**/*.scss', ['sass']);
	gulp.watch('app/*.html', ['copyHtml']);
	gulp.watch('src/scripts/**/*.js', ['javascript']);
	
	var buildFonts = gulp.src('app/fonts/**/*') 
	.pipe(gulp.dest('dist/fonts'))
	
	var buildJs = gulp.src('app/scripts/**/*')
	.pipe(gulp.dest('dist/js'))

});