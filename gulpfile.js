// For development => gulp
// For production  => gulp -p

// Call Plugins
var env        = require('minimist')(process.argv.slice(2)),
	gulp       = require('gulp'),
	jade       = require('gulp-jade'),
	concat     = require('gulp-concat'),
	uglify     = require('gulp-uglify'),
	gulpif     = require('gulp-if'),
	stylus     = require('gulp-stylus'),
	wjgrid     = require('wj-grid'),
	nib        = require('nib'),
	rupture    = require('rupture'),
	connect    = require('gulp-connect'),
	modRewrite = require('connect-modrewrite'),
	ftp        = require('gulp-ftp'),
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
	return gulp.src('src/js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulpif(env.p, uglify()))
		.pipe(gulp.dest('build/js'))
		.pipe(connect.reload());
});

// Call Stylus
gulp.task('stylus', function(){
		gulp.src('src/styl/main.styl')
		.pipe(stylus({
			use:[nib(),wjgrid(),rupture()],
			compress: env.p
		}))
		.pipe(gulp.dest('build/css'))
		.pipe(connect.reload());
});


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

gulp.task('ftp', function () {
    return gulp.src('build/**/*')
        .pipe(ftp({
            host: 'hostname',
            remotePath: '/public_html/',
            user: 'user',
            pass: 'pass'
        }));
});

// Default task
gulp.task('default', ['js', 'jade', 'stylus', 'watch', 'connect']);

// Build task
gulp.task('build', ['js', 'jade', 'stylus', 'imagemin']);
