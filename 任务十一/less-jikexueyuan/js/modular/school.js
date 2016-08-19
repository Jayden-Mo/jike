define(function(require, exports, module) {

    //合作院校切换

    var $ = require('jquery');



    function cardScroll(id, dec, w) {
        var obj = $("#" + id);
        var slideBox = obj.find(".slide-box-m-box");
        //内容层
        var slideContent = obj.find(".slide-content");

        var seeWidth = slideContent.innerWidth();
        if (slideBox.scrollLeft() >= seeWidth) {
            slideBox.scrollLeft(0);
        } else {
            var i = slideBox.scrollLeft();
            if (dec == "left") {
                i -= w;
            } else {              
                 i += w;
            }

            slideBox.scrollLeft(i);

        }

    }

    //合作院校
    $("#school .arrow").click(function() {
        var dec = $(this).attr("data-dec");
        cardScroll("school", dec, 138);
    });



});
