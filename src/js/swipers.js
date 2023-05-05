document.addEventListener('DOMContentLoaded', function () {

    // пересчет rem в px 
    const rem = function (rem) {
        if (window.innerWidth > 768) {
            return 0.00625 * window.innerWidth * rem;
        } else {
            // где 320 это ширина моб версии макета
            return (100 / 320) * (0.1 * window.innerWidth) * rem;
        }
    }

    // страница Главная 

    if (document.querySelector('.main-hero__swiper')) {
        const mainHeroSwiper = new Swiper('.main-hero__swiper', {
            slidesPerView: 'auto',
            autoplay: {
                delay: 3000,
            },
            speed: 800,
            loop: true,
            spaceBetween: rem(6),
            pagination: {
                el: '.main-hero__swiper-pagination'
            }
        })
    }

    // страница Карточка товара

    if (document.querySelector('.product-swiper1')) {
        const ariclesSwiper1 = new Swiper('.product-swiper1', {
            navigation: {
                nextEl: '.product-swiper1__container .next',
                prevEl: '.product-swiper1__container .prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: rem(3.6),
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: rem(6),
                }
            }
        })
    }

    if (document.querySelector('.product-swiper2')) {
        const ariclesSwiper2 = new Swiper('.product-swiper2', {
            navigation: {
                nextEl: '.product-swiper2__container .next',
                prevEl: '.product-swiper2__container .prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: rem(3.6),
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: rem(6),
                }
            }
        })
    }

    // страница Конечная страница

    if (document.querySelector('.deepest-page__tags')) {
        const deepestPageTags = new Swiper('.deepest-page__tags', {
            navigation: {
                nextEl: '.deepest-page__tags-next',
                prevEl: '.deepest-page__tags-prev',
            },
            breakpoints: {
                320: {
                    spaceBetween: rem(.8),
                    slidesPerView: 'auto',
                },
                769: {
                    spaceBetween: rem(1),
                    slidesPerView: 8.63,
                }
            }
        })
    }
})