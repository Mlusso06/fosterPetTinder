//SideNav Init
$(document).ready(function () {
    $('.sidenav').sidenav({
        edge: 'left',
    });

});

//Carousel Function
$('.owl-carousel.owl-theme').owlCarousel({
    items: 20,
    center: false,
    dots: true,
    loop: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    autoHeight: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 0
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//Rendering Pet Images to Carousel
$.get("/api/allpets", function (data) {

    for (var i = 0; i < data.pets_data.length; i++) {
        $("#card" + i).attr("src", data.pets_data[i].pet_photo);
        $("#title" + i).html(data.pets_data[i].pet_name);

    }
    console.log(data);
});


