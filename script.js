$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,  // Disable the default nav buttons
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1  // 1 item per slide on mobile
          },
          600: {
            items: 2  // 2 items per slide on tablets
          },
          1000: {
            items: 5  // 5 items per slide on desktops
          }
        }
    });

    // Custom next button
    $('.next-button').click(function() {
        $('.owl-carousel').trigger('next.owl.carousel');
    });

    // Custom previous button
    $('.prev-button').click(function() {
        $('.owl-carousel').trigger('prev.owl.carousel');
    });
});
