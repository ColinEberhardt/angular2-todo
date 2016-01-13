const gulp = require('gulp');
const del = require('del');
const fs = require('fs');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const tslint = require('gulp-tslint');
const reload = browserSync.reload;

const paths = {
  dist: 'dist',
  distFiles: 'dist/**/*',
  srcFiles: 'src/**/*',
  srcTsFiles: 'src/**/*.ts',
}

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(paths.distFiles);
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src([paths.srcFiles, '!' + paths.srcTsFiles])
    .pipe(gulp.dest(paths.dist))
});

// copy dependencies
gulp.task('copy:libs', ['clean'], function() {
  return gulp.src([
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/immutable/dist/immutable.js',
      'node_modules/redux/dist/redux.js',
      'node_modules/node-uuid/uuid.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  // load the tsconfig each time as it changes!
  const tscConfig = JSON.parse(fs.readFileSync('./tsconfig.json', 'UTF8'));
  return gulp
    .src(tscConfig.files)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist + '/app'));
});

// linting
gulp.task('tslint', function(){
  return gulp.src(paths.srcTsFiles)
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

// Run browsersync for development
gulp.task('serve', ['build'], function() {
  browserSync({
    server: {
      baseDir: paths.dist
    }
  });

  gulp.watch(paths.srcFiles, ['buildAndReload']);
});

gulp.task('build', ['tslint', 'clean', 'compile', 'copy:libs', 'copy:assets']);
gulp.task('buildAndReload', ['build'], reload);
gulp.task('default', ['build']);
