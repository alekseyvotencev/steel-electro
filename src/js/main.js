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

    const header = document.querySelector('header');
    const body = document.body;
    const html = document.documentElement;

    function closePopupElement(element) {
        body.classList.remove('lock');
        body.classList.remove('dark');
        html.classList.remove('lock');
        element.classList.remove('active');
        if (window.innerWidth > 768) {
            body.style.paddingRight = '0';
        }
    }

    function openPopupElement(element) {
        if (window.innerWidth > 768) {
            let scrollWidth = (window.innerWidth - body.clientWidth);
            body.style.paddingRight = `${scrollWidth}px`;
        }

        body.classList.add('lock');
        body.classList.add('dark');
        html.classList.add('lock');
        element.classList.add('active');
    }

    // поиск в хедере
    const headerSearch = document.querySelector('.header__search');
    headerSearch.addEventListener('click', function () {

    })

    // город в хедере
    const headerLocationBtn = document.querySelector('.header__location-btn');
    const locationChoice = document.querySelector('.choose-city');
    const locationChoiceClose = locationChoice.querySelector('.choose-city__close');
    headerLocationBtn.addEventListener('click', function () {
        openPopupElement(locationChoice)
    })
    locationChoiceClose.addEventListener('click', function () {
        closePopupElement(locationChoice);
    })

    // каталог в хедере
    const catalogBtnOpen = header.querySelector('.header__catalog-btn');
    const catalog = header.querySelector('.header__catalog-popup');
    const catalogBtnClose = header.querySelector('.header__catalog-close');
    catalogBtnOpen.addEventListener('click', function () {
        openPopupElement(catalog)
    })
    catalogBtnClose.addEventListener('click', function () {
        closePopupElement(catalog)
    })

    // секция Вопросы и ответы

    if (document.querySelector('.qa-section')) {
        const qaBtns = document.querySelectorAll('.qa-section__list-item__head');
        qaBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                btn.classList.toggle('active');
                let content = btn.nextElementSibling;
                content.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null
                } else {
                    content.style.maxHeight = content.scrollHeight / 10 + "rem";
                }
            })
        })
    }

    // аккордеоны

    if (document.querySelector('.acc-item')) {
        const accItems = document.querySelectorAll('.acc-item');
        accItems.forEach(item => {
            const accHead = item.querySelector(('.acc-head'));
            accHead.addEventListener('click', function () {
                accHead.classList.toggle('active');
                let content = accHead.nextElementSibling;
                content.classList.toggle('active');
                if (content.style.maxHeight) {
                    content.style.maxHeight = null
                } else {
                    content.style.maxHeight = content.scrollHeight / 10 + "rem";
                }
            })
        })
    }

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