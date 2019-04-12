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
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        // Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        // Transition
        transitionStyle : false,

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
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        // Basic Speeds
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        // Transition
        transitionStyle : false,

    });

    $('#sendtop').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $("header nav").offset().top
        }, 1000);

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
    height: 500,
    transition: 500,
    interval: 6000
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
M.ScrollSpy.init(ss, {});

