var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var autoprefixer = require('gulp-autoprefixer');

var SOURCEPATHS = {
  sassSource: 'src/scss/*.scss'
  // asterics means any file with .scss extension
}
var APPATH = {
  root: 'app/',
  css: 'app/css',
  js: 'app/js'
}

gulp.task('sass', function(){
  return gulp.src(SOURCEPATHS.sassSource)
    .pipe(autoprefixer())
    .pipe(sass({outputStyle: 'expanded'}). on('error', sass.logError))
    .pipe(gulp.dest(APPATH.css));
});

gulp.task('serve', ['sass'], function(){
  browserSync.init([APPATH.css + '/*.css', APPATH.root + '/*.html', APPATH.js + '/*.js' ], {
    server: {
      baseDir: APPATH.root
    }
  });
});

gulp.task('watch', ['serve' , 'sass'], function(){
  gulp.watch([SOURCEPATHS.sassSource], ['sass']);
})

gulp.task('default', ['watch']);




