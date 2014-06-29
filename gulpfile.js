// For development => gulp
// For production  => gulp -p

// Call Plugins
var env        = require('minimist')(process.argv.slice(2)),
	gulp       = require('gulp'),
	jade       = require('gulp-jade'),
	browserify = require('gulp-browserify'),
	uglify     = require('gulp-uglify'),
	gulpif     = require('gulp-if'),
	stylus     = require('gulp-stylus'),
	wjgrid     = require('wj-grid'),
	rupture    = require('rupture'),
	connect    = require('gulp-connect'),
	modRewrite = require('connect-modrewrite'),
	imagemin   = require('gulp-imagemin');

// Call Jade for compile Templates
gulp.task('jade', function(){
	return gulp.src('src/templates/*.jade')
		.pipe(jade({pretty: !env.p }))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

// Call Uglify and Concat JS
gulp.task('js', function(){
	return gulp.src('src/js/main.js')
		.pipe(browserify({debug: !env.p }))
		.pipe(gulpif(env.p, uglify()))
		.pipe(gulp.dest('build/js'))
		.pipe(connect.reload());
});

// Call Stylus
gulp.task('stylus', function(){
		gulp.src('src/styl/main.styl')
		.pipe(stylus({
			use:[wjgrid(),rupture()],
			compress: env.p
		}))
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});

// Call Imagemin
gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('build/img'));
});

// Call Watch
gulp.task('watch', function(){
	gulp.watch('src/templates/**/*.jade', ['jade']);
	gulp.watch('src/styl/**/*.styl', ['stylus']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

// Connect (Livereload)
gulp.task('connect', function() {
	connect.server({
		root: ['build/'],
		livereload: true,
		middleware: function(){
			return [
				modRewrite([
					'^/$ /index.html',
					'^([^\\.]+)$ $1.html'
				])
			];
		}
	});
});

// Default task
gulp.task('default', ['js', 'jade', 'stylus', 'imagemin', 'watch', 'connect']);
