$(document).ready(function () {

    $('#owl-products').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        },
        loop: false,
        nav: false,

        // Autoplay
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        // Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        // Transition
        transitionStyle: false,

    });

    $('#owl-news').owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        loop: false,
        nav: false,

        // Autoplay
        autoplay: false,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        // Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        // Transition
        transitionStyle: false,

    });

});

// Navbar
const dd = document.querySelector('.dropdown-trigger');
M.Dropdown.init(dd, {
    alignment: 'left',
});

// Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: true,
    height: 700,
    transition: 0,
    interval: 100000
});

// Autocomplete
const ac = document.querySelector('.autocomplete');
M.Autocomplete.init(ac, {
    data: {
        "Aruba": null,
        "Cancun Mexico": null,
        "Hawaii": null,
        "Florida": null,
        "California": null,
        "Jamacia": null,
        "Europe": null,
    }
});

// Material Boxed
const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});

// Material Boxed
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {
    scrollOffset: 250,
});

const parallax = document.querySelector('.parallax');
M.Parallax.init(parallax, {})

AOS.init({
    duration: 1500,
    mirror: false,
    once: false,

});

var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


// ON SCROLL SHRINK NAVBAR
window.onscroll = function () { scrollFunction() };

var x = document.getElementsByClassName("navs");

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.height = "70px";
        document.getElementById("logo").style.height = "70px";
        
        for(var i = 0 ; i < 7 ; i++)
        {
            x[i].style.lineHeight = "70px";
        }
    } else {
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("logo").style.height = "100px";
        for(var i = 0 ; i < 7 ; i++)
        {
            x[i].style.lineHeight = "100px";
        }
    }
}

