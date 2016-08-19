// 只需要编译 html 文件，以及其用到的资源。
fis.set('project.files', ['*.html', 'map.json']);

/*快速安装插件
npm install fis-spriter-csssprites -g
npm install fis-optimizer-uglify-js -g
npm install fis3-postpackager-loader -g
*/

//快速启动： fis3 release -omp


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

//添加MD5版本戳
fis.match('*.{js,css,png}', {
  useHash: true
});


//js/model目录下为组件
fis.match('/js/model/*.js', {
    isMod: true
});

fis.match('/js/vendor/sea.js', {
    isMod: false
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
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});

// js压缩
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

//图片压缩
fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});




//定位图片
fis.match('/images/(*.{png,gif})', {
    release: '/static/pic/$1$2'
});



