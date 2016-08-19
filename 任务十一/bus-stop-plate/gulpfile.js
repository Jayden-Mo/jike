
var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');//- 多个文件合并为一个；
var cssmin = require('gulp-minify-css');//- 压缩CSS为一行；
var autoprefixer = require('gulp-autoprefixer');
var rev = require('gulp-rev');     //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector');//- 路径替换


//- 创建一个名为 concat 的 task
gulp.task('concat', function() { 
    //- 需要处理的css文件                             
    gulp.src('less/*.less')                                 
        .pipe(less())   
        //- 合并后的文件名                                     
        .pipe(concat('style.min.css')) 
        //- 压缩处理成一行                         
        .pipe(cssmin())    
        //- 文件名加MD5后缀                                       
        .pipe(rev())  
        //- 输出文件本地                                          
        .pipe(gulp.dest('./style')) 
        //- 生成一个rev-manifest.json                            
        .pipe(rev.manifest())  
        //- 将 rev-manifest.json 保存到 rev 目录内                                 
        .pipe(gulp.dest('./rev'));                             
});

//- 创建一个名为 rev 的 task
gulp.task('rev', function() {
    //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
    gulp.src(['./rev/*.json', 'index.html'])   
        //- 执行文件内css名的替换
        .pipe(revCollector())  
        //- 替换后的文件输出的目录                                 
        .pipe(gulp.dest(''));                     
});


//- 执行默认任务
gulp.task('default', ['concat', 'rev']);


//监听less变化
gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['default']);
});
