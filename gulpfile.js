var gulp = require("gulp"),
    //server服务
    browserSync = require('browser-sync').create();


//使用connect启动一个Web服务器
gulp.task('browserSync', function () {
  browserSync.init({
         server: {
             baseDir: "."
         }
     });
});

//默认任务
gulp.task('default',function(){
   //初始化browserSync
    browserSync.init({
           server: {
               baseDir: "./"
           }
    });
});