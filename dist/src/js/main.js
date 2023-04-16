document.addEventListener('DOMContentLoaded', function () {

    // Пересчет rem в px
    const rem = function (rem) {
        if (window.innerWidth > 768) {
            return 0.00625 * window.innerWidth * rem;
        } else {
            // где 375 это ширина моб версии макета
            return (100 / 320) * (0.1 * window.innerWidth) * rem;
        }
    }

    // поиск в хедере
    const headerSearch = document.querySelector('.header__search')
    headerSearch.addEventListener('click', function () {

    })

    // карта в футере
    ymaps.ready(init);
    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [43.267479, 76.944190],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15,
            controls: []
        });

        const placemark = new ymaps.Placemark([43.266442, 76.948367], {},
            {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './src/images/svg/map-point.svg',
                // Размеры метки.
                iconImageSize: [rem(5), rem(5)],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [rem(-2.5), rem(-5)]
            })
        myMap.controls.remove('zoomControl');
        myMap.geoObjects.add(placemark);
    }

    // табы
    function initTabs(tabsContainer, contentConainer) {
        if (document.querySelector('.tabs__btn')) {
            const tabsBtns = tabsContainer.querySelectorAll('.tabs__btn');
            const contentBlocks = contentConainer.querySelectorAll('[data-target]');
            tabsBtns.forEach(btn => {
                btn.addEventListener('click', function (e) {
                    tabsBtns.forEach(el => el.classList.remove('active'));
                    btn.classList.add('active');
                    const path = e.target.dataset.path;
                    contentBlocks.forEach(block => block.classList.remove('active'));
                    contentConainer.querySelector(`[data-target=${path}]`).classList.add('active');
                })
            })
        }
    }

    // переключение страниц (пагинация)
    if (document.querySelector('.pagination')) {
        const paginationBtns = document.querySelectorAll('.pagination__list-item__btn');
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                paginationBtns.forEach(el => el.classList.remove('active'));
                btn.classList.add('active');
            })
        })
    }

    // НОВОСТИ

    // табы новостей 
    initTabs(document.querySelector('.news-main .tabs'), document.querySelector('.news-main '))

    // длина новости (добавляется многоточие в конце при переполнении)

    if (document.querySelector('.news-main__list-item__center-description')) {
        const newsDescriptions = document.querySelectorAll('.news-main__list-item__center-description');
        newsDescriptions.forEach(desc => {
            if (desc.innerText.length > 198) {
                desc.innerText = desc.innerText.substring(0, 198);
                desc.innerText += '...';
            }
        })
    }
})