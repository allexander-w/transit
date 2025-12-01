const sliderConfigs = [
    {
        cl: ".cases__slider",
        config: {
            spaceBetween: 56,
            slidesPerView: 1,

            breakpoints: {
                340: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 1,
                },
            },
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

            breakpoints: {
                340: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 4,
                },
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





const menuSectionTitles = document.querySelectorAll('.menu-section-title.has-dropdown');

menuSectionTitles.forEach(title => {
    title.addEventListener('click', () => {
        const sectionId = title.getAttribute('data-section');
        const dropdown = document.getElementById(sectionId);

        title.classList.toggle('active');
        dropdown.classList.toggle('active');
    });
});