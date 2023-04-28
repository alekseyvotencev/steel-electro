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

    // функция открытия попапа
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

    // функция закрытия попапа
    function closePopupElement(element) {
        body.classList.remove('lock');
        body.classList.remove('dark');
        html.classList.remove('lock');
        element.classList.remove('active');
        if (window.innerWidth > 768) {
            body.style.paddingRight = '0';
        }
    }

    // поиск в хедере
    const headerSearch = document.querySelector('.header__search');
    const inputSearch = headerSearch.querySelector('.header__search-form__input');
    const headerCatalog = header.querySelector('.header__catalog');
    const headerClients = header.querySelector('.header__clients');
    const headerContacts = header.querySelector('.header__contacts');
    const headerLocation = header.querySelector('.header__location');
    const headerSearchClear = header.querySelector('.header__search-clear');
    const headerLogo = header.querySelector('.header__logo')

    headerSearchClear.addEventListener('click', function () {
        inputSearch.focus();
        inputSearch.value = "";
    })

    if (window.innerWidth > 768) {
        inputSearch.addEventListener('focus', function () {
            headerCatalog.classList.add('disable');
            headerClients.classList.add('disable');
            headerContacts.classList.add('disable');
            headerLocation.classList.add('disable');
            headerSearch.classList.add('active');
        })

        inputSearch.addEventListener('focusout', function () {
            headerCatalog.classList.remove('disable');
            headerClients.classList.remove('disable');
            headerContacts.classList.remove('disable');
            headerLocation.classList.remove('disable');
            headerSearch.classList.remove('active');
        })
    } else {
        inputSearch.addEventListener('focus', function () {
            headerLogo.classList.add('disable');
            headerSearch.classList.add('active');
        })

        inputSearch.addEventListener('focusout', function () {
            headerLogo.classList.remove('disable');
            headerSearch.classList.remove('active');
        })
    }

    // мобильное меню в хедере
    const headerBurger = header.querySelector('.header__burger');
    const headerMobileMenu = header.querySelector('.header__mobile');
    const headerMobileBottom = header.querySelector('.header__mobile-bottom')
    let headerCatalogPopup = header.querySelector('.header__catalog-popup');
    headerBurger.addEventListener('click', function () {
        headerBurger.classList.toggle('active');
        headerMobileBottom.classList.toggle('active');
        document.body.classList.toggle('lock');
        document.documentElement.classList.toggle('lock');
        headerMobileMenu.classList.toggle('active');
        if (!headerBurger.classList.contains('active')) {
            headerCatalogPopup.classList.remove('active');
            headerCatalogPopup.querySelectorAll('active').forEach(item => item.classList.remove('active'));
        }
    })

    const headerMenuBtns = header.querySelectorAll('.header__mobile-list__item-btn');
    headerMenuBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            let path = btn.dataset.path;
            const elMenu = header.querySelector(`[data-target=${path}]`);
            elMenu.classList.add('active');
        })
    })

    // step1
    const headerStep1Items = header.querySelectorAll('.header__catalog-popup__step1-list-item');
    headerStep1Items.forEach(item => {
        if (window.innerWidth > 768) {
            item.addEventListener('mouseover', function () {
                item.querySelector('.header__catalog-popup__step2').classList.add('active');
            })

            item.addEventListener('mouseout', function () {
                item.querySelector('.header__catalog-popup__step2').classList.remove('active');
            })
        } else {
            item.addEventListener('click', function () {
                item.querySelector('.header__catalog-popup__step2').classList.add('active');
            })
        }
    })

    // step2
    const headerStep2Items = header.querySelectorAll('.header__catalog-popup__step2-list-item');
    headerStep2Items.forEach(item => {
        if (window.innerWidth > 768) {
            item.addEventListener('mouseover', function () {
                item.querySelector('.header__catalog-popup__step3').classList.add('active');
            })

            item.addEventListener('mouseout', function () {
                item.querySelector('.header__catalog-popup__step3').classList.remove('active');
            })
        } else {
            item.addEventListener('click', function () {
                item.querySelector('.header__catalog-popup__step3').classList.add('active');
            })
        }
    })


    // step3
    const headerStep3Items = header.querySelectorAll('.header__catalog-popup__step3-list-item');
    headerStep3Items.forEach(item => {
        if (window.innerWidth > 768) {
            item.addEventListener('mouseover', function () {
                item.querySelector('.header__catalog-popup__step4').classList.add('active');
            })

            item.addEventListener('mouseout', function () {
                item.querySelector('.header__catalog-popup__step4').classList.remove('active');
            })
        } else {
            item.addEventListener('click', function () {
                item.querySelector('.header__catalog-popup__step4').classList.add('active');
            })
        }
    })

    const headerStep3Back = header.querySelectorAll('.header__catalog-popup__step3-back');
    headerStep3Back.forEach(btn => {
        btn.addEventListener('click', function () {
            btn.parentElement.classList.remove('active');
        })
    })

    // step4
    const headerStep4Items = header.querySelectorAll('.header__catalog-popup__step4-list-item');
    headerStep4Items.forEach(item => {
        if (window.innerWidth > 768) {
            item.addEventListener('mouseover', function () {
                item.querySelector('.header__catalog-popup__step5').classList.add('active');
            })

            item.addEventListener('mouseout', function () {
                item.querySelector('.header__catalog-popup__step5').classList.remove('active');
            })
        } else {
            item.addEventListener('click', function () {
                item.querySelector('.header__catalog-popup__step5').classList.add('active');
            })
        }
    })

    const headerStep4Back = header.querySelector('.header__catalog-popup__step4-back');
    headerStep4Back.addEventListener('click', function () {
        headerStep4Back.parentElement.classList.remove('active');
    })

    // step5
    const headerStep5Items = header.querySelectorAll('.header__catalog-popup__step5-list-item');
    headerStep5Items.forEach(item => {
        if (window.innerWidth > 768) {
            item.addEventListener('mouseover', function () {
                item.querySelector('.header__catalog-popup__step6').classList.add('active');
            })

            item.addEventListener('mouseout', function () {
                item.querySelector('.header__catalog-popup__step6').classList.remove('active');
            })
        } else {
            item.addEventListener('click', function () {
                item.querySelector('.header__catalog-popup__step6').classList.add('active');
            })
        }
    })

    const headerStep5Back = header.querySelector('.header__catalog-popup__step5-back');
    headerStep5Back.addEventListener('click', function () {
        headerStep5Back.parentElement.classList.remove('active');
    })

    // step6 

    const headerStep6Back = header.querySelector('.header__catalog-popup__step6-back');
    headerStep6Back.addEventListener('click', function () {
        headerStep6Back.parentElement.classList.remove('active');
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

    if (document.querySelector('#map')) {
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
    }

    // характеристики на странице КАРТОЧКА ТОВАРА
    if (document.querySelector('.product-card__center-btn')) {
        const productOptionsBtn = document.querySelector('.product-card__center-btn');
        let content = document.querySelector('.product-card__center-list');
        productOptionsBtn.addEventListener('click', function () {
            productOptionsBtn.classList.toggle('active');
            if (content.style.maxHeight) {
                content.style.maxHeight = null
            } else {
                content.style.maxHeight = content.scrollHeight / 10 + "rem";
            }
        })
    }


    // карта на странице КОНТАКТЫ
    if (document.querySelector('#contacts-map')) {

        ymaps.ready(init);
        function init() {
            // Создание карты.
            var myMap = new ymaps.Map("contacts-map", {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [43.259352, 76.942420],
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
    }

    // табы
    function initTabs(tabsContainer, contentConainer) {
        if (document.querySelector('.tabs__btn')) {
            const tabsBtns = tabsContainer.querySelectorAll('.tabs__btn');
            const contentBlocks = contentConainer.querySelectorAll('[data-target]');
            tabsBtns.forEach(btn => {
                btn.addEventListener('click', function (e) {
                    tabsBtns.forEach(el => {
                        if (el !== btn) {
                            el.classList.remove('active')
                        }
                    });
                    btn.classList.toggle('active');
                    if (btn.classList.contains('active')) {
                        const path = btn.dataset.path;
                        contentBlocks.forEach(block => block.classList.remove('active'));
                        contentConainer.querySelector(`[data-target=${path}]`).classList.add('active');
                    } else {
                        contentBlocks.forEach(block => block.classList.remove('active'));
                        contentConainer.querySelector(`[data-target=default]`).classList.add('active');
                    }

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
    initTabs(document.querySelector('.news-main .tabs'), document.querySelector('.news-main'))

    // длина новости (добавляется многоточие в конце при переполнении)

    // if (document.querySelector('.news-main__list-item__center-description')) {
    //     const newsDescriptions = document.querySelectorAll('.news-main__list-item__center-description');
    //     newsDescriptions.forEach(desc => {
    //         if (desc.innerText.length > 198) {
    //             desc.innerText = desc.innerText.substring(0, 198);
    //             desc.innerText += '...';
    //         }
    //     })
    // }
})