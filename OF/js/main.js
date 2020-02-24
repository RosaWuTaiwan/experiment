$(".menu-content").hide();
$("#gotop").hide();
$('#menu-trigger-open').click(function () {
    $('.menu-content').addClass('opened').fadeIn();
    $('#menu-trigger-open').addClass('opened').fadeOut();
    $('#menu-trigger-close').click(function () {
        $('.menu-content').removeClass('opened').fadeOut();
        $('#menu-trigger-open').addClass('opened').fadeIn();
    });
});
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn();
        } else {
            $('#gotop').fadeOut();
        }
    });
    $('#gotop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'fast');
        return false;
    });
});


