define(function(require, exports, module) {
    /*
    模块名：课程栏目切换
    */

 var $ = require('jquery');
    
    //课程栏导航切换效果
    $(".lesson-nav li").hover(function() {
        var i = $(".lesson-nav li").index(this);
        $(".lesson-nav li").removeClass("on");
        $(".lesson-nav li").eq(i).addClass("on");
        $(".lesson-list ul").hide();
        $(".lesson-list ul").eq(i).show();
    });

});
