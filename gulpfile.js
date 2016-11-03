var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify')
    plumber = require('gulp-plumber');

gulp.task('reload', ['less'], browserSync.reload ) ;

gulp.task('less', function(){
  return gulp.src('./src/assets/less/**/*')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer({
      browsers : 'last 2 versions',
      cascade : false
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/assets/css/'))
})

gulp.task('watch', function(){
  gulp.watch('./src/*.html', ['reload']) ;
  gulp.watch('./src/app/**/*.html', ['reload']) ;
  gulp.watch('./src/app/**/*.js', ['reload']) ;
  gulp.watch('./src/app/**/*.less', ['reload']) ;
  gulp.watch('./src/assets/less/**/*', ['reload']) ;
})

gulp.task('js', function(){
  gulp.src('./src/app/**/*.js')
  .pipe(plumber())
  .pipe(uglify({compress:true}))
  .pipe(dest('build'))
})

gulp.task('serve', ['less'], function() {
  browserSync({
    server : {
      baseDir : './src',
      routes : {
        '/bower_components' : 'bower_components'
      }
    }
  })
} )

gulp.task('default', ['serve','less','watch'] ) ;
