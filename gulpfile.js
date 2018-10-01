// gulpプラグインの読み込み
const gulp = require('gulp');
const browserSync = require('browser-sync');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
 
// style.scssをタスクを作成する
gulp.task('default',['watch', 'sass', 'browser-sync']);

gulp.task('sass', function() {
  // style.scssファイルを取得
  gulp.src('./src/css/style.scss')
  // Sassのコンパイルを実行
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ".",
      index: "index.html"
    }
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch('./src/css/style.scss',['sass', 'bs-reload']);
  //gulp.watch('./src/js/index.js');
  gulp.watch('./index.html',['bs-reload']);
});
