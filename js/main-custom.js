// Funciones de menu responsive

$(document).ready(function(){
    /*Menu mobile*/
    $(".menu_burger").click(function() {
        $(this).toggleClass("is-active");
        $('.menu_mobile').toggleClass("menu-fix");
    });
});

$(document).ready(main);

var contador = 1;
function main() {
    $('.menu_mobile').click(function() {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};

var slider = tns({
    container: ".my-slider",
    items: 3,
    arrowKeys: true,
    swipeAngle: false,
    mouseDrag: true,
    controls: false,
    responsive: {
        1100: {
          items: 3
        },
        768: {
          items: 2
        },
        200: {
          items: 1
        }
    }
});

