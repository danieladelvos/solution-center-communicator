var fs = require('fs');
var gulp = require('gulp');
var karma = require('karma').server;
var concat = require('gulp-concat');
var header = require('gulp-header');
var rename = require('gulp-rename');
var es = require('event-stream');
var del = require('del');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var order = require('gulp-order');
var eslint = require('gulp-eslint');

var config = {
  pkg : JSON.parse(fs.readFileSync('./package.json')),
  banner:
  '/*!\n' +
  ' * <%= pkg.name %>\n' +
  ' * <%= pkg.homepage %>\n' +
  ' * License: <%= pkg.license %>\n' +
  ' */\n\n\n'
};

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('scripts', function() {

  function buildDistJS(){
    return gulp.src('src/**/*.js')
      .pipe(plumber({
        errorHandler: handleError
      }));
  };

  es.merge(buildDistJS())
    .pipe(plumber({
      errorHandler: handleError
    }))
    .pipe(order([
      'solution.center.communicator.js'
    ]))
    .pipe(concat('solution.center.communicator.js'))
    .pipe(header(config.banner, {
      pkg: config.pkg
    }))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
  return gulp.src('src/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
});

gulp.task('lint-test', function() {
  return gulp.src('./test/**/*.js')
      .pipe(eslint());
});

gulp.task('karma', ['build'], function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('build', ['lint', 'scripts']);
gulp.task('default', ['build', 'test']);
gulp.task('test', ['build', 'lint-test', 'karma']);
