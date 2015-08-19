// For development => gulp
// For production  => gulp -p

// Call Plugins
var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    gulpif      = require('gulp-if'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    rupture     = require('rupture'),
    koutoSwiss  = require('kouto-swiss'),
    prefixer    = require('autoprefixer-stylus'),
    modRewrite  = require('connect-modrewrite'),
    imagemin    = require('gulp-imagemin'),
    karma       = require('gulp-karma'),
    rsync       = require('rsyncwrapper').rsync;

// Call Jade for compile Templates
gulp.task('jade', function(){
    return gulp.src('src/templates/*.jade')
        .pipe(plumber())
        .pipe(jade({pretty: !env.p }))
        .pipe(gulp.dest('build/'));
});

// Call Uglify and Concat JS
gulp.task('js', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('main.js'))
        .pipe(gulpif(env.p, uglify()))
        .pipe(gulp.dest('build/js'));
});

// Call Uglify and Concat JS
gulp.task('browserify', function(){
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(browserify({debug: !env.p }))
        .pipe(gulpif(env.p, uglify()))
        .pipe(gulp.dest('build/js'));
});

// Call Stylus
gulp.task('stylus', function(){
        gulp.src('src/styl/main.styl')
        .pipe(plumber())
        .pipe(stylus({
            use:[koutoSwiss(), prefixer(), jeet(),rupture()],
            compress: env.p
        }))
        .pipe(gulp.dest('build/css'));
});

// Call Imagemin
gulp.task('imagemin', function() {
    return gulp.src('src/img/**/*')
        .pipe(plumber())
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

// Call Watch for Browserify
gulp.task('watchfy', function(){
    gulp.watch('src/templates/**/*.jade', ['jade']);
    gulp.watch('src/styl/**/*.styl', ['stylus']);
    gulp.watch('src/js/**/*.js', ['browserify']);
    gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

gulp.task('browser-sync', function () {
   var files = [
      'build/**/*.html',
      'build/css/**/*.css',
      'build/img/**/*',
      'build/js/**/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './build/'
      }
   });
});

// Rsync
gulp.task('deploy', function(){
    rsync({
        ssh: true,
        src: './build/',
        dest: 'user@hostname:/path/to/www',
        recursive: true,
        syncDest: true,
        args: ['--verbose']
    },
        function (erro, stdout, stderr, cmd) {
            gutil.log(stdout);
    });
});

// Default task
gulp.task('default', ['js', 'jade', 'stylus', 'imagemin', 'watch', 'browser-sync']);

// Default task using browserify
gulp.task('fy', ['browserify', 'jade', 'stylus', 'imagemin', 'watchfy', 'browser-sync']);

// Build and Deploy
gulp.task('build', ['js', 'jade', 'stylus', 'imagemin', 'deploy']);

// Build and Deploy
gulp.task('buildfy', ['browserify', 'jade', 'stylus', 'imagemin', 'deploy']);