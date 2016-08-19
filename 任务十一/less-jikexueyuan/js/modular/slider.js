define(function(require, exports, module) {

    //主轮播图

    var $ = require('jquery');


    var slide = {};
    slide.time = 2000;
    slide.picWidth = 742;
    index = 0;
    slide.picNum = $(".slide-img a").length;

    //图片切换
    slide.runPic = function() {
        if (index == slide.picNum) {
            //如果是最后一张，则重置
            index = 0;
        }
        if (index < 0) {
            index = slide.picNum - 1;
        }
        $(".slide-img").animate({
            left: -slide.picWidth * index
        });
        $(".slide-nav span").removeClass("switch").eq(index).addClass("switch");
        index++;
    };

    //2秒播放一次
    slide.interval = setInterval(slide.runPic, slide.time);

    //上一张
    $(".arrow-left").click(function() {
        clearInterval(slide.interval);
        index = index - 2;
        slide.runPic();

    });
    //下一张
    $(".arrow-right").click(function() {
        clearInterval(slide.interval);
        slide.runPic();
    });

    //点击效果
    $(".slide-nav span").click(function() {
        clearInterval(slide.interval);
        index = $(".slide-nav span").index(this);
        slide.runPic();
    });

});
