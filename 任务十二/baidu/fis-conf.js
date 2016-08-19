fis.set('project.files', ['*.html', 'map.json']);

/*快速安装插件
npm install fis-spriter-csssprites -g
npm install fis-optimizer-uglify-js -g
npm install fis3-hook-cmd -g
npm install fis-optimizer-html-minifier -g
npm install fis3-postpackager-loader -g
*/

//快速启动： fis3 release  


/*图片合并*/

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


//js/modular目录下为组件
fis.match('/js/modular/*.js', {
    isMod: true
});

fis.match('/js/sea/sea.js', {
    isMod: false
});

//配置模块目录，设置别名
fis.hook('cmd', {
    baseUrl: './js',
    paths: {
        "jquery": "jquery",
        "$": "jquery"
    }
});


//打包
fis.match('::packager', {
    postpackager: fis.plugin('loader')
});

//css合并
fis.match('*.css', {
    packTo: '/static/aio.css'
});

//js合并
fis.match('*.js', {
    packTo: '/static/aio.js'
});

//css压缩
fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});

//html压缩
fis.match('*.html', {
  // fis-optimizer-html-minifier 插件进行压缩
  optimizer: fis.plugin('html-minifier')
});

// js压缩
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩
  optimizer: fis.plugin('uglify-js')
});

//图片压缩
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩
  optimizer: fis.plugin('png-compressor')
});

//定位图片
fis.match('/images/(*.{png,gif})', {
    release: '/static/pic/$1$2'
});


// sea.js
fis.media('prod')
   .match('/js/**.js', {
        optimizer: fis.plugin('uglify-js')
   })
   .match('::packager', {
        postpackager: fis.plugin('loader', {
            allInOne: {
                includeAsyncs: true,
                ignore: ['/js/sea/sea.js']
            }
        })
   });


