document.addEventListener('DOMContentLoaded', function () {

    const showSlider = new Swiper('.showcase-carousel', {
        breakpoints: {
            0: {
                slidesPerView: 2,
                draggable: true,
            },
            768: {
                slidesPerView: 3,
            }
        },
        loop: true,
        speed: 1800,
        centeredSlides: true,
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    });

    document.querySelector('video').playbackRate = 2;
});