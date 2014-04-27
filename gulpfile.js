// Variable to set Environment
var env = process.env.NODE_ENV || 'development';

// Call Plugins
var gulp       = require('gulp'),
	jade       = require('gulp-jade'),
	concat     = require('gulp-concat'),
	uglify     = require('gulp-uglify'),
	gulpif     = require('gulp-if'),
	stylus     = require('gulp-stylus'),
	jeet       = require('jeet2'),
	rupture    = require('rupture');

var nib = require('nib');

// Call Jade for compile Templates
gulp.task('jade', function(){
	return gulp.src('src/templates/**/*.jade')
		.pipe(jade({pretty: env === 'development' }))
		.pipe(gulp.dest('build/'));
});

// Call Uglify and Concat JS
gulp.task('js', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulpif(env === 'production', uglify()))
		.pipe(gulp.dest('build/js'));
});

// Call Stylus
gulp.task('stylus', function(){
		gulp.src('src/css/main.styl')
		.pipe(stylus({
			use:[nib(),jeet(),rupture()],
			compress: env === 'production'
		}))
		.pipe(gulp.dest('build/css'));
});
