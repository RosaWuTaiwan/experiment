
$(document).ready(function () {
    var win = (parseInt($(".couten").css("width"))) - 60;
    // $(".mo").css("height", $(document).height());
    // $(".couten").css("height", $(document).height());
    // $(".backward").css("height", $(document).height());
    $(".mo").css("height", $(window).height());
    $(".couten").css("height", $(window).height());
    $(".backward").css("height", $(window).height());
    $("li").css({});
    $("#keepClick").click(function () {
        $("#keepClick").css("display", "none")
        $("#keepClick-ebd").css("display", "block")
        
    });
    // 點擊確認關閉提示 //請在此改寫導去它頁
    $(".sen .close").click(function () {
        $(".game-screen").css("display", "none")
        $("#dontwannaplay").css("display", "none")
    });
    $("#dontwannaplay").click(function () {
        $(".game-screen").css("display", "none")
        $("#dontwannaplay").css("display", "none")
    });

    // var del = function () {   //2019/10/28
    //     nums++;
    //     $(".li" + nums).remove();
    //     setTimeout(del, 200)//每1000豪秒殺一個
    // }
    var del = function () {
        nums++;
        $(".couten")[0].removeChild($(".li" + nums)[0]);
        setTimeout(del, 200)//每1000豪秒殺一個
    }

    var add = function () {
        var hb = parseInt(Math.random() * (4 - 1) + 1);
        var Wh = parseInt(Math.random() * (170 - 30) + 20);
        var Left = parseInt(Math.random() * (win - 0) + 0);
        var rot = (parseInt(Math.random() * (45 - (-45)) - 45)) + "deg";
        num++;
        $(".couten").append("<li class='li" + num + "' ><a href='javascript:;'><img src='http://events.tk3c.com/events_net/events_net/201911tk3c_double11/game/images/hb_" + hb + ".png'></a></li>");
        $(".li" + num).css({
            "left": Left,
        });
        $(".li" + num + " a img").css({
            "width": Wh,
            "transform": "rotate(" + rot + ")",
            "-webkit-transform": "rotate(" + rot + ")",
            "-ms-transform": "rotate(" + rot + ")", /* Internet Explorer */
            "-moz-transform": "rotate(" + rot + ")", /* Firefox */
            "-webkit-transform": "rotate(" + rot + ")",/* Safari 和 Chrome */
            "-o-transform": "rotate(" + rot + ")" /* Opera */
        });
        $(".li" + num).animate({ 'top': $(window).height() + 20 }, 5000, function () {
            //刪掉已經顯示的紅包
            //this.remove()   //2019/10/28
            $(".couten")[0].removeChild(this);
        });
        $(".game-screen").click(function () {
            $(".mo").css("display", "block")
            $(".backward .notice").css("display", "none")
            $(".ousideHand").css("display", "none")
            $(".couten").css("display", "none")
        });
        setTimeout(add, 100) //每XXX豪秒掉一個
    }
    //0s開始掉红包
    var num = 0;
    setTimeout(add, 0);
})

