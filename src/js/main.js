$(document).ready(function () {
    // SET THE CAROUSEL
    $('.jumbotron-carousel').slick({
        arrows: false,
        dots: true,
        appendDots:$('.slick-dots')
    });

    $('.left-selector').on('click', function(){
        $('.jumbotron-carousel').slick('slickPrev');
    });
    $('.right-selector').on('click', function(){
        $('.jumbotron-carousel').slick('slickNext');
    });
    // /SET THE CAROUSEL

    // APPEND ELEMNTS TO MAIN MENU ON MOBILE

    function changePositionOnMd() {
        var nav_vertical, breadcrumb, contact_link;
        var md_down_bpoint = window.matchMedia("(max-width: 767.98px)");
        nav_vertical = $('.nav-vertical').detach();
        breadcrumb = $('.breadcrumb-nav').detach();
        contact_link = $('.contact-us').detach();

        if (md_down_bpoint.matches) {
            nav_vertical.appendTo('.append-on-sm-nav-vertical');
            breadcrumb.appendTo('.append-on-sm-breadcrumb');
            contact_link.appendTo('.append-on-sm-contact-us');
        } else {
            nav_vertical.appendTo('.append-on-md-nav-vertical');
            breadcrumb.appendTo('.append-on-md-breadcrumb');
            contact_link.appendTo('.append-on-md-contact-us');
        }
    }
    $(document).ready(changePositionOnMd);
    $(window).resize(changePositionOnMd);
    // /APPEND ELEMNTS TO MAIN MENU ON MOBILE

});
