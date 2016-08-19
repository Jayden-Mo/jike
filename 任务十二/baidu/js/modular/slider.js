/*
**************使用了  单例模式  实现页面中的轮播功能***********************
单例优点：
  元素和事件相分离，代码更易于阅读;
  保护了属性和方法，防止互相干扰。
*/
define(function(require, exports, module) {

        //每一次播放间隔
        var time = 2500;
        //计时对象
        var interval;
        //图片宽度
        var picWidth = 425;
        //初始化
        var index = 0;
        //图片张数
        var picNum = $(".img-viewer-cell a").length;

        function runPic() {
            if (index == picNum) {
                //若为最后一张，则重置
                index = 0;
            }
            if (index < 0) {
                index = picNum - 1;
            }
            $(".img-viewer-cell").animate({
                left: -picWidth * index
            });
            $(".img-bars-content a").removeClass("on").eq(index).addClass("on");
            index++;
        }

        /*
        ******************单例模式**********************
        */
            var slider = {}

            //封装逻辑到代码块里面
            slider.init = function() {
                    var me = this;
                    //绑定DOM元素
                    me.render();
                    //为DOM元素执行事件
                    me.bind();
                }
                //指定元素
            slider.render = function() {
                    var me = this;
                    me.preBtn = $(".pre-img");
                    me.nextBtn = $(".next-img");
                    me.imgCon = $(".s-news-img-ctner");
                    me.smallPic = $(".img-bars-content a");
                }
                //绑定事件
            slider.bind = function() {
                var me = this;

                //首先，鼠标悬浮则播放停止
                me.imgCon.hover(function() {
                    clearInterval(interval);
                }, function() {
                    interval = setInterval(runPic, time);
                });

                //上一张
                me.preBtn.click(function() {
                    clearInterval(interval);
                    index = index - 2;
                    runPic();

                });

                //下一张
                me.nextBtn.click(function() {
                    clearInterval(interval);
                    runPic();
                });

                //图片缩略图
                me.smallPic.click(function() {
                    clearInterval(interval);
                    index = $(".img-bars-content a").index(this);
                    runPic();
                });
            }
        // return slider;
        module.exports = slider;
});
