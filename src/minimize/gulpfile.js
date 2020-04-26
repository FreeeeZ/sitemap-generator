var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var del = require('del');
var gutil = require('gulp-util');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');

var jsFiles = [

];

var cssFiles = [

];

var dist = '../../dist/';

function clean() {
  return del([
    '../../dist/**',
    '!..'
  ], {
    force: true,
  });
}

function scripts() {
  return gulp.src(jsFiles)
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: [
        ['@babel/env', {
          modules: false
        }]
      ]
    }))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest(dist))
    .on('end', function(){
      console.log('<=========================================================>');
      console.log('<=============== Compile JS files success! ===============>');
      console.log('<=========================================================>');
    });
}

function styles() {
  var processors = [
    autoprefixer({browsers: ['last 5 version', 'ie >= 10', '> 1%']})
  ];

  return gulp.src(cssFiles)
    .pipe(plumber())
    .pipe(concat('styles.css'))
    .pipe(postcss(processors))
    .pipe(minifyCSS())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(gulp.dest(dist))
    .on('end', function(){
      console.log('<=========================================================>');
      console.log('<=============== Compile CSS files success! ==============>');
      console.log('<=========================================================>');
    });
}

function watch() {
  gulp.watch(cssFiles, styles);
  gulp.watch(jsFiles, scripts);
}

gulp.task('clean', clean);
gulp.task('scripts', scripts);
gulp.task('styles', styles);

gulp.task(
  'build',
  gulp.series(clean, gulp.parallel(styles, scripts))
);

gulp.task('watch', gulp.parallel(watch));

gulp.task('default', gulp.series(clean, gulp.parallel(watch, styles, scripts)));
