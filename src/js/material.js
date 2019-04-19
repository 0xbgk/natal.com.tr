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
        autoplay: false,
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
            scrollTop: $("body").offset().top
        }, 1000);

    });

    // fullPage
    $('#fullpage').fullpage({
		//options here
        autoScrolling:true,
        scrollBar: true,
        keyboardScrolling:true,
        scrollHorizontally: true, 
        navigation:true,
        navigationPosition: 'left',
        navigationTooltips: ['About Us', 'Products - News', 'Photo-Gallery', 'Contact', 'Footer'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'top',
        // sectionsColor: ['#F5F5F5', '#E8E8E8', '#DCDCDC', '#D3D3D3'],        
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
M.ScrollSpy.init(ss, {});
