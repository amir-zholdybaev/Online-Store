var img = document.getElementById('img');
var title = document.querySelectorAll('#title');
var old = document.querySelectorAll('#old');
var newP = document.querySelectorAll('#new');
var buy = document.querySelectorAll('#buy');
var comp = document.querySelectorAll('#comp');
var elWidth = 263;
var perTitle = 15 * 100 / elWidth;
var perOld = 16 * 100 / elWidth;
var perNew = 20 * 100 / elWidth;
var perBuy = 15 * 100 / elWidth;
var perComp = 14 * 100 / elWidth;

function responsiveFont(element, text, percent) {
    var fontSize = element.offsetWidth * percent / 100;
    text.forEach(function(text) {text.style = "font-size: " + fontSize.toFixed(2) + "px;";});
}

function responsiveFonts() {
    responsiveFont(img, title, perTitle);
    responsiveFont(img, old, perOld);
    responsiveFont(img, newP, perNew);
    responsiveFont(img, buy, perBuy);
    responsiveFont(img, comp, perComp);
}

function pagination(tabNav) {
    var tabNav = document.querySelectorAll(tabNav);

    tabNav.forEach(function(element) {
        element.addEventListener('click', function() {
            tabNav.forEach(function(element) {
                element.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

function tab(tabNav, tabContent) {
    var tabNav = document.querySelectorAll(tabNav);
    var tabContent = document.querySelectorAll(tabContent);
    var tabName;

    function selectTabContent(tabName) {
        tabContent.forEach(function(element) {
            element.classList.contains(tabName) ? element.classList.add('active') : 
            element.classList.remove('active');
        });
    }

    function selectTabNav() {
        tabNav.forEach(function(element) {
            element.classList.remove('active');
        });

        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    tabNav.forEach(function(element) {
        element.addEventListener('click', selectTabNav);
    });
}