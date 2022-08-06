var more = document.querySelector('.header__more');
var moreDialog = document.querySelector('.header__more-dialog');
var body = document.querySelector('.body');
var searchForm = document.querySelector('.header__search-form');
var searchFormFindButton = document.querySelector('.header__search-form-find-button');
var searchButton2 = document.querySelector('.header__search-menu-open');
var searchMenuPopupContent = document.querySelector('.search-menu-popup__content');
var searchMenuClose = document.querySelector('.search-menu-popup__close');
var burger = document.querySelector('.header__burger');
var burgerLine = document.querySelector('.header__burger-line');
var burgerMenu = document.querySelector('.burger__menu');
var wrapper = document.querySelector('.wrapper');
var rightButtonSearch = document.querySelector('.header__right-button_search');
var rightButtonCall = document.querySelector('.header__right-button_call');
var phonesPopupContent = document.querySelector('.phones-popup__content');
var phonesPopupTitle = document.querySelector('.phones-popup__title');
var areaPopupClose = document.querySelector('.area-popup__close');
var popup = document.querySelector('.popup');
var contactUsButton = document.querySelector('.header__contacts-button');
var phoneNumbers = document.querySelector('.header__phone-numbers');
var connection = document.querySelector('.header__connection');
var headerMenu = document.querySelector('.header__menu');
var callButton = document.querySelector('.header__call-button');
var callPopup = document.querySelector('.call-popup');
var callPopupContent = document.querySelector('.call-popup__content');
var callPopupClose = document.querySelector('.call-popup__close');
var searchMenuPopup = document.querySelector('.search-menu-popup');
var rightButtonArea = document.querySelector('.header__right-button_area');
var areaPopup = document.querySelector('.area-popup');
var areaPopupContent = document.querySelector('.area-popup__content');
var phonesPopup = document.querySelector('.phones-popup');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var directory = document.querySelector('#directory');
var directoryList = document.querySelector('#dir-list');
var backBtn = document.querySelector('#back');
var upArrowBtn = document.querySelector('.footer__up-arrow-btn');


function displayBlock(element) {setTimeout(function(){element.style = "display: block;";}, 4);}

function moreMenuToggleChild(size, newParent, oldParent, child) {
    if(window.innerWidth < size) {
        document.querySelector(newParent).appendChild(document.getElementById(child));
    }
    else {
        document.querySelector(oldParent).appendChild(document.getElementById(child));
        document.querySelector(oldParent).appendChild(document.querySelector('.header__more'));
    }
}
function menuListReturnChild() {
    if(window.innerWidth  < 1021) {
        document.querySelector('.header__menu-list').appendChild(document.getElementById('blog'));
        document.querySelector('.header__menu-list').appendChild(document.getElementById('contacts'));
        document.querySelector('.header__menu-list').appendChild(document.getElementById('stocks'));
    }
}

function toggleChild(size, newParent, oldParent, child) {
    if(window.innerWidth < size) {
        document.querySelector(newParent).appendChild(document.getElementById(child));
    }
    else {
        document.querySelector(oldParent).appendChild(document.getElementById(child));
    }
}

//=======================================================================================

// if(($(this).scrollTop() + $(this).height()) > $(className).offset().top) {

// }

window.addEventListener('DOMContentLoaded', function() {
    moreMenuToggleChild(1095, '.header__more-dialog', '.header__menu-list', 'blog');
    moreMenuToggleChild(1208, '.header__more-dialog', '.header__menu-list', 'contacts');
    moreMenuToggleChild(1232, '.header__more-dialog', '.header__menu-list', 'stocks');

    menuListReturnChild();
    displayBlock(popup);

    burger.addEventListener('click', function() {
        burgerMenu.classList.toggle('show');
        burger.classList.toggle('active');
        burgerLine.classList.toggle('active');
        directoryList.classList.remove('show');
        burgerMenu.classList.remove('display-none');
        
        if (!main.classList.contains('display-none')) {
            setTimeout(function() {
                main.classList.toggle('display-none');
                footer.classList.toggle('display-none');
            }, 200);
        }
        else {
            main.classList.toggle('display-none');
            footer.classList.toggle('display-none');
        }
        responsiveFonts();
    });

    directory.addEventListener('click', function() {
        directoryList.classList.toggle('show');
        burgerMenu.classList.toggle('display-none');
    });
    backBtn.addEventListener('click', function() {
        directoryList.classList.toggle('show');
        burgerMenu.classList.toggle('display-none');
    });

// BUTTONS ====================================================================================

    contactUsButton.addEventListener("click",function() {
        phonesPopup.classList.toggle('phones-popup_change');
        phonesPopupContent.classList.toggle('phones-popup__content_change');
        body.classList.add('overflow-hidden');
    });

    more.addEventListener("click",function() {
        moreDialog.classList.toggle('header__more-dialog_change');
    });

    //===================================================

    callButton.addEventListener('click', function() {
        callPopup.classList.add('call-popup_change');
        body.classList.add('overflow-hidden');
    });
    callPopupClose.addEventListener('click', function() {
        callPopup.classList.remove('call-popup_change');
        body.classList.remove('overflow-hidden');
    });

    //===================================================
    function buttonListener(button) {
        button.addEventListener('click', function() {
            searchMenuPopup.classList.toggle('show');
            searchMenuPopupContent.classList.toggle('show');
            body.classList.add('overflow-hidden');
        });
        searchMenuClose.addEventListener('click', function() {
            searchMenuPopup.classList.remove('show');
            searchMenuPopupContent.classList.remove('show');
            body.classList.remove('overflow-hidden');
        });
    }

    buttonListener(searchButton2);
    buttonListener(rightButtonSearch);

    //===================================================

    rightButtonArea.addEventListener('click', function() {
        areaPopup.classList.add('area-popup_change');
        body.classList.add('overflow-hidden');
    });
    areaPopupClose.addEventListener('click', function() {
        areaPopup.classList.remove('area-popup_change');
        body.classList.remove('overflow-hidden');
    });

    //===================================================

    rightButtonCall.addEventListener('click', function() {
        phonesPopup.classList.add('phones-popup_change');
        phonesPopupContent.classList.toggle('phones-popup__content_change');
        body.classList.add('overflow-hidden');
    });
    phonesPopupTitle.addEventListener('click', function() {
        phonesPopup.classList.remove('phones-popup_change');
        phonesPopupContent.classList.remove('phones-popup__content_change');
        body.classList.remove('overflow-hidden');
    });

    //===================================================
    
    upArrowBtn.addEventListener('click', function() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    });

// DOCUMENT.ADDEVENTLISTENER==================================================================

    document.addEventListener('click', function(event) {
        if (!more.contains(event.target) && !moreDialog.contains(event.target)) {
            moreDialog.classList.remove('header__more-dialog_change');
        }

        if(callPopup.contains(event.target)) {
            callPopup.classList.remove('call-popup_change');
            body.classList.remove('overflow-hidden');
        }

        if (searchMenuPopup.contains(event.target)) {
            searchMenuPopup.classList.remove('show');
            searchMenuPopupContent.classList.remove('show');
            body.classList.remove('overflow-hidden');
        }

        if (areaPopup.contains(event.target)) {
            areaPopup.classList.remove('area-popup_change');
            body.classList.remove('overflow-hidden');
        }

        if (phonesPopup.contains(event.target)) {
            phonesPopup.classList.remove('phones-popup_change');
            phonesPopupContent.classList.remove('phones-popup__content_change');
            body.classList.remove('overflow-hidden');
        }
    });

});

window.addEventListener('resize', function() {
    moreMenuToggleChild(1095, '.header__more-dialog', '.header__menu-list', 'blog');
    moreMenuToggleChild(1208, '.header__more-dialog', '.header__menu-list', 'contacts');
    moreMenuToggleChild(1232, '.header__more-dialog', '.header__menu-list', 'stocks');

    menuListReturnChild();
});