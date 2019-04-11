$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 4
            }
        }
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

