/**
 * Created by GlobalMedia on 23.10.2016.
 */

    $(function(){

        $('#slider1').pSlider({
            slider: $('#slider1 ul li'),
            button: {
                next: $('#slider1 .next'),
                prev: $('#slider1 .prev')
            },
            pagination: $('#slider1 .pagination'),
            loop: true,
            auto: true,
            time: 3000,
            width: 970,
            skip: 1
        });

    });




//YAZARA  SLİDER
$(function(){

    $('#slider0').pSlider({
        slider: $('#slider0 ul li'),
        button: {
            next: $('#slider0 .next'),
            prev: $('#slider0 .prev')
        },
        pagination: $('#slider0 .pagination'),
        loop: true,
        time: 2000,
        width: 185,
        skip: 1,
        height:60
    });

});



//YATAY İNCE UZUN SLİDER
$(function(){

    $('#slider2').pSlider({
        slider: $('#slider2 ul li'),
        button: {
            next: $('#slider2 .next'),
            prev: $('#slider2 .prev')
        },
        width: 340,
        extra: 5, // extra margin değeri 5px
        visible: 3,
        loop: true,

        skip: 3
    });

});

//YAzar SLİDER
$(function(){

    $('#slider-yazar').pSlider({
        slider: $('#slider-yazar ul li'),
        button: {
            next: $('#slider-yazar .next'),
            prev: $('#slider-yazar .prev')
        },
        height: 100,
        extra: 5, // extra margin değeri 5px
        visible: 3,
        direction: 'vertical',
        duration: 500
    });

});





        // SON DAKİKA SLİDER
    $(function() {

        $('#carousel-son').carouFredSel({
            width: 900,
            items: 4,
            scroll: 1,
            auto: {
                duration: 1250,
                timeoutDuration: 2500
            },
            prev: '#prev',
            next: '#next',
            pagination: '#pager'
        });

    });

        //YATAY EN ALT SLİDER
    $(function(){

        $('#slider3').pSlider({
            slider: $('#slider3 ul li'),
            button: {
                next: $('#slider3 .next'),
                prev: $('#slider3 .prev')
            },
            pagination: $('#slider3 .pagination'),
            loop: true,
            auto: true,
            time: 2700,

            width: 848,
            height:270
        });

    });




// index alt en alt galeri
$(function() {
    $('#wrapper4').hover(
        function() {
            $('#carousel4').trigger( 'pause' );
            $('#thumbnails4').parent().animate({
                top: 280
            });
        }, function() {

            $('#carousel4').trigger( 'play' );
            $('#thumbnails4').parent().animate({
                top: 375
            });
        }
    );

    $('#carousel4').carouFredSel({
        scroll: {
            fx: 'crossfade',
            onBefore: function( data ) {
                $('#thumbnails4').trigger( 'slideTo', [ $('#thumbnails4 img[alt='+ data.items.visible.attr( 'alt' ) +']'), -2 ] );
            }
        }
    });

    $('#thumbnails4').carouFredSel({
        auto: false,
        items: {
            start: -2
        }
    });

    $('#thumbnails4 img').click(function() {
        $('#carousel4').trigger( 'slideTo', [ $('#carousel4 img[alt='+ $(this).attr( 'alt' ) +']') ] );

    }).css( 'cursor', 'pointer' );
});


//HABER SAYFASI HOVER HABERLER
$(function() {
    $('.carousel5').each(function() {
        var $cfs = $(this);
        $cfs.carouFredSel({
            direction: 'up',
            circular: false,
            infinite: false,
            align: false,
            width: 275,
            height: 250,
            items: 1,
            auto: false,
            scroll: {
                queue: 'last'
            }
        });
        $cfs.hover(
            function() {
                $cfs.trigger('next');
            },
            function() {
                $cfs.trigger('prev');
            }
        );
    });
});


/// KURUMSAL METİN
    $(document).ready(function(){

        var varsayilanFontBuyuklugu = $(".kurumsal-metin").css("font-size");

        $(".sifirla").click(function(){
            $(".kurumsal-metin").css({"font-size" : varsayilanFontBuyuklugu});
        });

        $(".buyult").click(function(){
            var fontBuyukluguFloat = parseFloat($(".kurumsal-metin").css("font-size"));
            var yeniFontBuyuklugu = fontBuyukluguFloat * 1.2;
            if(yeniFontBuyuklugu < 50)
                $(".kurumsal-metin").css({"font-size" : yeniFontBuyuklugu});
        });

        $(".kucult").click(function(){
            var fontBuyukluguFloat = parseFloat($(".kurumsal-metin").css("font-size"));
            var yeniFontBuyuklugu = fontBuyukluguFloat * 0.8;
            if(yeniFontBuyuklugu > 5)
                $(".kurumsal-metin").css({"font-size" : yeniFontBuyuklugu});
        });
    })

// haber sayfası collapsed

    $('#myCollapsible').on('hidden.bs.collapse', function () {

    })





// KURUMSAL SAYFA GALERİSİ
$(function() {

    $('#carousel6 span').append('<img src="img/gui/carousel_glare.png" class="glare" />');
    $('#thumbs6 a').append('<img src="img/gui/carousel_glare_small.png" class="glare" />');

    $('#carousel6').carouFredSel({
        responsive: true,
        circular: false,
        auto: false,
        items: {
            visible: 1,
            width: 200,
            height: '56%'
        },
        scroll: {
            fx: 'directscroll'
        }
    });

    $('#thumbs6').carouFredSel({
        responsive: true,
        circular: false,
        infinite: false,
        auto: false,
        prev: '#prev6',
        next: '#next6',
        items: {
            visible: {
                min: 2,
                max: 6
            },
            width: 150,
            height: '66%'
        }
    });

    $('#thumbs6 a').click(function() {
        $('#carousel6').trigger('slideTo', '#' + this.href.split('#').pop() );
        $('#thumbs6 a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    });

});





// BELED. PROFİL SAYFASI baskan ALT YAZISI

jQuery(document).ready(function ($) {


    setInterval(function () {
        moveRight();
    }, 3000);


    var slideCount = $('#rehber ul li').length;
    var slideWidth = $('#rehber ul li').width();
    var slideHeight = $('#rehber ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#rehber').css({ width: slideWidth, height: slideHeight });

    $('#rehber ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#rehber ul li:last-child').prependTo('#rehber ul');

    function moveLeft() {
        $('#rehber ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#rehber ul li:last-child').prependTo('#rehber ul');
            $('#rehber ul').css('left', '');
        });
    };

    function moveRight() {
        $('#rehber ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#rehber ul li:first-child').appendTo('#rehber ul');
            $('#rehber ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});



//beld. profil sayfası alt rehber
$(function() {
    $('#carousel2').carouFredSel({
        direction: 'down',
        width: 300,
        height: 350,
        align: false,
        padding: [0, 0, 350, 0],
        items: {
            width: 500,
            height: 30,
            visible: 5,
            minimum: 1
        },
        scroll: {
            items: 1,
            duration: 3000,
            onBefore: function( data ) {
                $('span', this).removeClass('selected');
                data.items.visible.last().find('span').addClass('selected');
            }
        }
    });
    $('#carousel2').children().click(function() {
        $('#carousel2').trigger( 'slideTo', [this, -4, 'prev'] );
    });
});


// BELED PROFİL SAYFASI ALT KISIM


$(function() {
    $('#carousel3').carouFredSel({
        direction: 'down',
        width: 300,
        height: 350,
        align: false,
        padding: [0, 0, 350, 0],
        items: {
            width: 500,
            height: 30,
            visible: 5,
            minimum: 1
        },
        scroll: {
            items: 1,
            duration: 2000,
            onBefore: function( data ) {
                $('span', this).removeClass('selected');
                data.items.visible.last().find('span').addClass('selected');
            }
        }
    });
    $('#carousel3').children().click(function() {
        $('#carousel3').trigger( 'slideTo', [this, -4, 'prev'] );
    });
});



//beled. profil sayfası iç
$(function() {
    $('#carousel').carouFredSel({
        direction: 'down',
        width: 300,
        height: 350,
        align: false,
        padding: [0, 0, 350, 0],
        items: {
            width: 500,
            height: 30,
            visible: 5,
            minimum: 1
        },
        scroll: {
            items: 1,
            duration: 1000,
            onBefore: function( data ) {
                $('span', this).removeClass('selected');
                data.items.visible.last().find('span').addClass('selected');
            }
        }
    });
    $('#carousel').children().click(function() {
        $('#carousel').trigger( 'slideTo', [this, -4, 'prev'] );
    });
});
