define(function(require, exports, module) {

    //首页效果

     var $ = require('jquery');


    //搜索框聚焦效果
    $(".keywords").focus(function(){
        $(".hot-words").hide();
        $('.search-btn').addClass("search-focus");
    }).blur(function(){
        $(".hot-words").show();
        $('.search-btn').removeClass("search-focus");
    });

    //搜索关键字点击效果
    $(".hot-words a").click(function(){
        var txt=$(this).text();
       $(".keywords").val(txt);
    });

});
