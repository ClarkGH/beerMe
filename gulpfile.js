const gulp = require("gulp"),
  babel = require("gulp-babel");

gulp.task("transpile", () => {
  return gulp.src("./main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});