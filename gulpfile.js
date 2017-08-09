'use strict';

const gulp = require( 'gulp' ),
  sass = require( 'gulp-sass' ),
  gutil = require( 'gulp-util' );

gulp.task('sass', function() {
  gulp.src('public/styles/main.scss')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('build'))
});

gulp.task('default', ['sass']);