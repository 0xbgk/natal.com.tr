$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs({
        swipeable: false
    });
    $('.datepicker').datepicker({
        disableWeekends: true
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();


    $('#sendtop').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("header nav").offset().top
        }, 1000);

    });
});