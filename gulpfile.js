const { src, dest, watch, series } = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const minify = require("gulp-babel-minify");
const fileinclude = require("gulp-file-include");
const del = require("del");

// gulp.task("minify", () =>
//   gulp.src("./build/app.js")
//     .pipe(minify({
//       mangle: {
//         keepClassName: true
//       }
//     }))
//     .pipe(gulp.dest("./dist"));
// );

// Clean output directory
function clean() {
  return del(["build"]);
}

//Move images
function moveFiles() {
  return src(["./img/*", "./img/**/*"]).pipe(dest("build/img"));
}

function jsTask() {
  return src("./js/*.js")
    .pipe(
      minify({
        mangle: {
          keepClassName: true,
        },
      })
    )
    .pipe(dest("./build/js/"));
}

function cssTask() {
  return src("./scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss())
    .pipe(dest("./build/css/"));
}

function includefileTask() {
  return src(["*.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(dest("./build/"));
}

function watchTask() {
  //   clean();
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });
  watch(["./*.html", "./template/*.html", "./scss/*.scss"], cssTask);
  watch(["./*.html", "./template/*.html"], moveFiles);
  watch("./js/*.js", jsTask);
  watch(["./*.html", "./template/*.html"], includefileTask);
  watch(["./*.html", "./template/*.html"]).on("change", browserSync.reload);
}

exports.default = series(
  clean,
  moveFiles,
  cssTask,
  jsTask,
  includefileTask,
  watchTask
);
