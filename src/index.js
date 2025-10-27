const sliderConfigs = [
    {
        cl: ".cases__slider",
        config: {
            spaceBetween: 56,
        }
    },
    {
        cl: ".trust__slider",
        config: {
            spaceBetween: 40,
            slidesPerView: 4,
            navigation: {
                nextEl: '.trust-button-next',
                prevEl: '.trust-button-prev',
            },
        }
    },
    {
        cl: ".reviews__slider",
        config: {
            slidesPerView: 1,
            pagination: {
                el: ".reviews-pagination",
            },
            navigation: {
                nextEl: '.reviews-button-next',
                prevEl: '.reviews-button-prev',
            },
        }
    }
]

const registerSliders = () => {
    for ( const slider of sliderConfigs ) {
        const node = document.querySelector(slider.cl);
        if ( node ) new Swiper(slider.cl, slider.config);
    }
}

registerSliders();