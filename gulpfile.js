var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var cleanCSS    = require('gulp-clean-css');
var sourcemaps  = require('gulp-sourcemaps');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var sassLint    = require('gulp-sass-lint');


var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
		sassError: 'Error in sass'
};


// Build the Jekyll Site

gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build','--incremental'], {stdio: 'inherit'})
        .on('close', done);
});

// Build the Jekyll Site

gulp.task('jekyll-build-dev', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build','--config','_config-dev.yml', '--destination','../../new/designsystem-dev'], {stdio: 'inherit'})
        .on('close', done);
});


// Rebuild Jekyll & do page reload

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


// Wait for jekyll-build, then launch the Server

gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
				//tunnel: "designsystem"
    });
});


// Concatenate and minify js files

var jsFiles = 'js/*.js',
		jsDest = 'js/minified/';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts-all.js'))
				.pipe(gulp.dest(jsDest))
				.pipe(rename('scripts-all.min.js'))
				.pipe(uglify())
        .pipe(gulp.dest(jsDest))
});

// Copy js files to _site folder and reload

gulp.task('copy-scripts', function () {
    gulp.src('js/**/*')
        .pipe(gulp.dest('_site/js/'));
    browserSync.reload();
});

// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)

gulp.task('sass', function () {
    return gulp.src('_sass/main.scss')
				.pipe(sourcemaps.init())
        .pipe(sass({
            onError: browserSync.notify(messages.sassError)
        }))
				.on('error', sass.logError)
        .pipe(prefix(['last 4 versions']))
				.pipe(sourcemaps.write())
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
				.pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

// Sass lint

gulp.task('sass-lint', function () {
  return gulp.src('_sass/**/*.scss')
    .pipe(sassLint({
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});


// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync

gulp.task('watch', function () {
  gulp.watch(['js/*.js', 'js/**/*.js'], ['scripts', 'copy-scripts']);
  gulp.watch('_sass/**/*.scss', ['sass', 'sass-lint']);
  gulp.watch(['*.html', '_layouts/*.html', '_includes/**/*', 'components/**/*', 'objects/**/*', 'pages/**/*', '_data/*', 'images/**/*'], ['jekyll-rebuild']);
});


// Default task, running just `gulp` will compile the sass,
// compile the jekyll site, launch BrowserSync & watch files.

gulp.task('default', ['browser-sync', 'watch']);

// Continues integration server task
gulp.task('server-build', ['scripts', 'sass', 'jekyll-build-dev']);
