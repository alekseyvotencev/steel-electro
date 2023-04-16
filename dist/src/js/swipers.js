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

    if (document.querySelector('.product-swiper1')) {
        const ariclesSwiper = new Swiper('.product-swiper1', {
            navigation: {
                nextEl: '.product-swiper1__container .next',
                prevEl: '.product-swiper1__container .prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: rem(1.6),
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: rem(6),
                }
            }
        })
    }

    if (document.querySelector('.product-swiper2')) {
        const ariclesSwiper = new Swiper('.product-swiper2', {
            navigation: {
                nextEl: '.product-swiper2__container .next',
                prevEl: '.product-swiper2__container .prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 'auto',
                    spaceBetween: rem(1.6),
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: rem(6),
                }
            }
        })
    }
})