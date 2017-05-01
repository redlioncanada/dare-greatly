
'use strict';

var gulp = require('gulp'),
connect = require('gulp-connect-php'),
_ = require('lodash'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
buffer = require('vinyl-buffer'),
uglify = require('gulp-uglify'),
sourcemaps = require('gulp-sourcemaps'),
sass = require('gulp-sass'),
notify = require('gulp-notify'),
gutil = require('gulp-util'),
watch = require('gulp-watch'),
resolve = require('resolve'),
del = require('del'),
copy = require('copy'),
jshint = require('gulp-jshint'),
paths = {},
staticpaths = {};

paths.main = './wordpress/wp-content/themes/reverie-master';
paths.sassEntry = paths.main + '/scss/app.scss';
paths.jsEntry = paths.main + '/js-src/app.js';

paths.cssTarget = paths.main + '/css';
paths.jsTarget = paths.main + '/js'
staticpaths.src = './static/src'
staticpaths.dist = './static/dist'

function getNPMPackageIds() {
        // read package.json and get dependencies' package ids
        var packageManifest = {};
        try {
            packageManifest = require('./package.json');
        } catch (e) {
            // does not have a package.json manifest
        }
        return _.keys(packageManifest.dependencies) || [];
    }



/*gulp.task('build-vendor', function() {
    // this task will go through ./bower.json and
    // uses bower-resolve to resolve its full path.
    // the full path will then be added to the bundle using require()
    var b = browserify({
        // generate source maps in non-production environment
        debug: false
    });
    // do the similar thing, but for npm-managed modules.
    // resolve path using 'resolve' module
    getNPMPackageIds().forEach(function(id) {
         b.require(resolve.sync(id), {
                expose: id
        });
    });
    var stream = b.bundle().pipe(source('vendor.js')).pipe(buffer())
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('./wp-content/themes/reverie-master/js/'));
    return stream;
});*/

gulp.task('sass', function () {
    gulp.src(paths.sassEntry)
        //.pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: true,
        }).on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.cssTarget))
        .pipe(notify({message:"SCSS transformed."}));
    });

gulp.task('sass-production', function () {
    gulp.src(paths.sassEntry)
        //.pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            sourceComments: false,
        }).on('error', sass.logError))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.cssTarget))
        .pipe(notify({message:"SCSS transformed."}));
    });
gulp.task('maintenance', function(){
    gulp.src('./wp-content/themes/reverie-master/scss/maintenance-mode-page.scss')
        .pipe(sass({
            outputStyle:'compressed',
            sourceComments:false
        }).on('error',sass.logError))
    .pipe(gulp.dest('./wp-content/themes/reverie-master/css/'));
});
gulp.task('stream', function() {
  gulp.watch('./wp-content/themes/reverie-master/scss/**/*.scss', ['sass']);
});

gulp.task('javascript', ['lint'], function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.jsEntry,
    debug: true
});
  

  return b.bundle().on('error', logError)
  .pipe(source('dg.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', logError)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.jsTarget))
        .pipe(notify({message:"Javascript transpiled."}));
    });


gulp.task('javascript-production', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: paths.jsEntry,
    debug: true
});
  return b.bundle().on('error', logError)
  .pipe(source('dg.js'))
  .pipe(buffer())
  .pipe(uglify({'preserveComments':false}))
  .on('error', logError)
  .pipe(gulp.dest(paths.jsTarget))
  .pipe(notify({message:"Javascript transpiled."}));
});

function logError(e){
    gutil.log(e);
    notify({message:"There has been a javascipt error."})
    this.emit('end');
}

gulp.task('statics',function(){
    gulp.src(staticpaths.src + '/*.html')
    .pipe(gulp.dest(staticpaths.dist));
    gulp.src(staticpaths.src + '/images/**/*')
    .pipe(gulp.dest(staticpaths.dist + '/images/'));
    gulp.src(staticpaths.src + '/webfonts/**/*')
    .pipe(gulp.dest(staticpaths.dist + '/webfonts/'));
})


gulp.task('watch',function(){gulp.watch([
    paths.main + '/scss/**/*.scss',
    paths.main + '/js-src/**/*.js',
    ], [
    'sass','javascript'
    ]);
});
gulp.task('watch-sass',function(){gulp.watch([
    paths.main + '/scss/**/*.scss',

    ], [
    'sass'
    ]);
});
gulp.task('watch-js',function(){gulp.watch([
    paths.main + '/js-src/**/*.js',

    ], [
    'javascript'
    ]);
});
/*gulp.task('watch-statics',function(){gulp.watch([
        './static/src/*.html',
        
    ], [
        'statics'
    ]);
});
*/

gulp.task('lint', function() {
  return gulp.src(paths.main + '/js-src/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        //.pipe(jshint.reporter('fail'))
});


gulp.task('clean:dist', function() {
    return del(['dist/**/*', '!dist']);
});

gulp.task('copy', ['clean:dist'], function() {
    gulp.src(['wp-content/**/*', 'wp/**/*', 'wp-config.php', 'php.ini', 'index.php', '.htaccess', '!wp-content/themes/{child_test,child_test/**}', '!wp-content/themes/reverie-master/{js-src,js-src/**}','!wp-content/themes/reverie-master/{scss,scss/**}'], {base: "."})
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', [
    'sass','javascript', 'watch-sass','watch-js'
    ]);

gulp.task('build', [
    'sass','javascript'
    ]);

//Create a distribution folder
gulp.task('build', [
    'sass-production','javascript-production','clean:dist', 'copy'
    ]);

gulp.task('dev', [
    'sass','javascript'
    ]);

