// var gulp = require('gulp');
// var webserver = require('gulp-webserver');

// gulp.task('webserver', function(){
//     gulp.src('./app/').pipe(webserver({
//         port:1234,
//         livereload: true,
//         directryListing:false,
//         open: true,
//         fallback:'index.html'
//     }));
// });
// gulp.task('default',['webserver']);


// var gulp = require('gulp'), //呼叫gulp函式
//     concat = require('gulp-concat'), //合併檔案用
//     minifyCSS = require('gulp-minify-css'),  //壓縮css檔案
//     uglify = require('gulp-uglify'),   //混淆並壓縮 JS
//     rename = require("gulp-rename"), //重新命名
//     htmlreplace = require('gulp-html-replace'),
//     minifyHTML = require('gulp-minify-html');

// // 合併css檔案用
// gulp.task('concat', function(){
//     return gulp.src('./app/css/*.css').pipe(concat('all.css')).pipe(gulp.dest('./build/css/'));  //壓縮 app/css內的檔案，合併成all.css並送到build/css內
// });

// // 壓縮css
// gulp.task('minify-css',['concat'], function(){
//     return gulp.src('./build/css/all.css').pipe(minifyCSS({
//         keepBreaks:true,
//     })).pipe(rename(function(path){
//         path.basename +=".min";
//         path.extname =".css";
//     })).pipe(gulp.dest('./build/css/'));
// });


// // 壓縮js
// gulp.task('uglify',function(){
//     return gulp.src('./app/js/*.js').pipe(uglify()).pipe(rename(function(path){
//         path.basename += ".min";
//         path.extname = ".js";
//     })).pipe(gulp.dest('./build/js/'));
// });




// //壓縮html
// gulp.task('html-replace',function(){
//     var opts = {comments:false,spare:false,quotes:true};
//     return gulp.src('./app/*.html').pipe(htmlreplace({
//         'css': 'css/all.min.css',
//         'js':'js/all.min.js'
//     })).pipe(minifyHTML(opts)).pipe(gulp.dest('./build/'));
// });
// gulp.task('default',['html-replace','minify-css','uglify']);
// //執行: 在cmd 輸入gulp




// sass
var gulp = require('gulp'),
    compass = require('gulp-compass');

    //scss轉成csss
gulp.task('compass',function(){
   return gulp.src('./style/scss/*.scss').pipe(compass({
       soucemap:true,
       time:true,
       css:'./style/css',
       sass:'./style/scss',
       style:'compact' //nested, expanded, compact, compressed
   })).pipe(gulp.dest('./style/css/')); 
});

    //監看watch
gulp.task('watch',function(){
    gulp.watch('./style//scss/*.scss', ['compass']);
});
gulp.task('default',['compass','watch']);