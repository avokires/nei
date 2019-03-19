// Bower components
//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/swiper/dist/js/swiper.min.js

$(document).ready(function () {
    // Custom components should lay in the folder 'components'

    // var hasIE = window.eval && eval("/*@cc_on 1;@*/") && (/msie (\d+)/i.exec(navigator.userAgent) || [,true])[1];

    // if (hasIE < 10) {
    //     $('.old-popop').addClass('showed');
    // }
    // var res = navigator.userAgent.match(/; CPU.*OS (\d_\d)/);
    // if(res) {
    //     var strVer = res[res.length-1];
    //     strVer = strVer.replace("_", ".");
    //     version = strVer * 1;
    //     if(version < 9) {
    //         $('.old-popop').addClass('showed');
    //     }
    // }


    var swiper = new Swiper('.slider-type1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.slider-type1__pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    

});
