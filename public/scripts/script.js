const prevIcon = '<div class="prev-slide"><i class="fa fa-solid fa-chevron-left fa-lg"></i></div>';
const nextIcon = '<div class="next-slide"><i class="fa fa-solid fa-chevron-right fa-lg"></i></div>';

$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 15,
    nav: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2.3
            // items: 1.75 /* Optional */
        }
    }
})