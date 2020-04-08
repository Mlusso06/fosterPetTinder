//Carousel Function
$('.owl-carousel.owl-theme').owlCarousel({
    items: 3,
    center: true,
    dots: true,
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: true,
    autoHeight: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

//Rendering Pet Images to Carousel
$.get("/api/")

