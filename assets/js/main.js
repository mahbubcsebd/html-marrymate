$(document).ready(function() {
    $('#navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
        $('#navbarContent').slideToggle();
        $('#nav-level-content-2, #nav-level-content-3, #nav-level-content-4').css('display', 'none');
    });

    $('.dropdown-toggle').click(function () {
        $(this).next().toggleClass('hidden');
    });

    // Header Search
    let searchShow = false;
    $('.header-search-btn').click(function () {
        $('.header-search-input').toggle();
        if(!searchShow){
            $('.header-search-input').focus();
            $('.header-nav').css('visibility', 'hidden');
            $('.header-search-btn').html('<i class="fa-solid fa-x"></i>');
            searchShow = true;
        }else{
            $('.header-search-input').blur();
            $('.header-nav').css('visibility', 'visible');
            $('.header-search-btn').html('<i class="fa-solid fa-magnifying-glass"></i>');
            searchShow = false;
        }
    });

    if ($(window).width() <= 1024) {
    $('.nav-sub-menu-btn').on('click', function () {
        const targetBtn = $(this);
        targetBtn.toggleClass('collapse');
        targetBtn.next('ul').slideToggle();
    });
}

    // Quantity
    // Decrement button click event
    $('.quantity-container .quantity-decrement').click(function () {
        var quantityDisplay = $(this).siblings('.quantity');
        var quantity = parseInt(quantityDisplay.text());
        if (quantity > 1) {
            quantity--;
            quantityDisplay.text(quantity);
        }
    });

    // Increment button click event
    $('.quantity-container .quantity-increment').click(function () {
        var quantityDisplay = $(this).siblings('.quantity');
        var quantity = parseInt(quantityDisplay.text());
        quantity++;
        quantityDisplay.text(quantity);
    });

    //  Wishlist
    $('#heart-toggle').click(function () {
        const icon = $(this).find('i');
        if (icon.hasClass('fa-solid')) {
            icon.removeClass('fa-solid fa-heart heart-filled');
            icon.addClass('fa-regular fa-heart');
        } else {
            icon.removeClass('fa-regular fa-heart');
            icon.addClass('fa-solid fa-heart heart-filled');
        }
    });

    // Tab
    showTab(1); // Show the first tab by default

    // Event listener for tab button clicks
    $('#tab-buttons button').click(function () {
        var tabIndex = $(this).data('tab-index');
        showTab(tabIndex);
    });

    function showTab(tabIndex) {
        // Hide all tab contents
        $('#tabs-content > div').addClass('hidden');

        // Remove 'active' class from all tab buttons
        $('#tab-buttons button').removeClass('active');

        // Show the selected tab content
        $('#tab-content-' + tabIndex).removeClass('hidden');

        // Add 'active' class to the clicked tab button
        $('#tab-buttons button[data-tab-index="' + tabIndex + '"]').addClass(
            'active'
        );
    }

    $('.teamsSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    function sliderBtn(slider, prev, next) {
        $(prev).click(function () {
            $(slider).slick('slickPrev');
        });

        $(next).click(function () {
            $(slider).slick('slickNext');
        });
        $(prev).addClass('slick-disabled');
        $(slider).on('afterChange', function () {
            if ($(prev).hasClass('slick-disabled')) {
                $(prev).addClass('slick-disabled');
                $(prev).removeClass('slick-disabled');
            }
            if ($(next).hasClass('slick-disabled')) {
                $(next).addClass('slick-disabled');
            } else {
                $(next).removeClass('slick-disabled');
            }
        });
    }

    sliderBtn('.teamsSlider', '#team-prev', '#team-next');

    // Blogs Slider
    $('.blogs-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    sliderBtn('.blogs-wrapper', '#blog-prev', '#blog-next');

    // Testimonial Slider
    $('.testimonial-wrapper').slick({
        autoplay: true,
        dots: true,
        slidesToShow: 1,
    });

    $('.testimonial-2-wrapper').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });

    sliderBtn(
        '.testimonial-2-wrapper',
        '#testimonial-prev',
        '#testimonial-next'
    );

    // Project Slider
    $('.project-wrapper').slick({
        centerMode: true,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    // Gallary Slider
    $('.gallary-wrapper').slick({
        centerMode: true,
        autoplay: true,
        // centerPadding: '60px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                },
            },
        ],
    });
});