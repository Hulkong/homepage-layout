$(document).ready(function () {
    var ww = $(window).width();
    //Header
    //스크롤이 움직였을때 header 배경 나타나기
    $(window).scroll(function () {
        var sc = $(window).scrollTop();

        if (sc == 0) {

            $('header.cf').css({
                background: 'transparent',
                boxShadow: '0 10px 10px 5px rgba(0,0,0,0)'
            });

            $('header > div.logo a').css('background-image', 'url(' + 'img/logo_w.png' + ')');
            $('nav.nav01 ul.menu li a.menu_tit').css('color', 'white');
            $('div.btn_nav').css('background', 'transparent');
            $('div.btn_nav .line').css('background', 'white');


        } else if (sc > 0) {
            $('header.cf').css({
                background: '#fff',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            });
            $('header > div.logo a').css('background-image', 'url(' + 'img/logo.png' + ')');
            $('nav.nav01 ul.menu li a.menu_tit').css('color', '#222');
            $('div.btn_nav').css('background', '#0230e5');
            $('div.btn_nav .line').css('background', 'rgb(25,25,25)');
        }

    }); //scroll_end

});