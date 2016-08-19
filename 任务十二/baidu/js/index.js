define(function(require, exports, moudles) {
	require('jquery');
    var news = require('modular/slider');
    var tab = require('modular/tab');

    //单例模式执行
    tab.init();
    news.init();
});
