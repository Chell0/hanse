$(document).ready(function () {
    // Sticky Navigation
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: "60px;"
    });

    /* Scroll on buttons */
    $('.js--scroll-to-catalogue').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-catalogue').offset().top }, 1000);
    });
});