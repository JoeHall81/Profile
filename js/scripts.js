$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 100) {
        $('nav').addClass("showColor");
    } else {
    $('nav').removeClass("showColor");
    }
    });