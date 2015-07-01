$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -90)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(function() {
    $('body').on('click', '.page-scroll-about a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('body').on('click', '.page-scroll-contact  a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$("a").addClass("hover");

$('.nav li a').addClass('big');

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
$('body').scrollspy({ target: '.navbar-default' })