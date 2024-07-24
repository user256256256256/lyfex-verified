(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.wa-action-btn').fadeIn('slow');
        } else {
            $('.wa-action-btn').fadeOut('slow');
        }
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });    

    // payment ovelay
    const $overlay = $('.payment-overlay');
    const $overlayTrigger = $('.payment-overlay-trigger');
    const $btnClose = $overlay.find('.cancelBtn');

    $($overlay).hide();

    $($overlayTrigger).click(function(e) {
        e.preventDefault();

        $($overlay).fadeIn();
        // Populate form fields
        const price = $(this).attr('data-price');
        const service = $(this).attr('data-service');
        const currentDate = new Date().toISOString().split('T')[0];

        $('#payment-date').val(currentDate);
        $('#currency').val(price);
        $('#service-name').val(service);
    });

    $(document).mouseup(function(e) {
        var container = $('.payment-container');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $($overlay).fadeOut();
        }
    });

    $btnClose.on('click', function() {
        $($overlay).fadeOut();
    });

    // Prevent form submission for now
    $('#payment-form').on('submit', function(e) {
        e.preventDefault();
        // Handle form submission logic here
    });
    
})(jQuery);
