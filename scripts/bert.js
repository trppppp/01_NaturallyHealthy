//Mostrar texto oculto
var textToShow = document.getElementById("text-hidden");
var btn = document.getElementById("btn");

if (btn) {
    btn.addEventListener('click', function () {
        toggleHiddenText();
    }, false);
}

//Menú
var menu = document.getElementById("menu-container");
var btnMenu = document.getElementById("btn-menu");
var menuVar = document.getElementById("header");
var txtHidden = document.getElementById("text-hidden");
var menuProductos = document.getElementById("btn-menu-p");
var menuMeetUs = document.getElementById("btn-menu-m");
var menuContacto = document.getElementById("btn-menu-c");
var menuTop = document.getElementById("mtop");
var menuDown = document.getElementById("mdown");
var menuBuy = document.getElementById("mbuy");
var menuCatalog = document.getElementById("mcat");
var lang = document.getElementById("lang");

//Contact
var cboxLopd = document.getElementById("cbox");
var btnSend = document.getElementById("submit");

if (btnMenu) {
    btnMenu.addEventListener('click', function () {
        toggleMenu();
    }, false);
}
if (menuProductos) {
    menuProductos.addEventListener('click', function () {
        toggleMenu();
    }, false);
}
if (menuContacto) {
    menuContacto.addEventListener('click', function () {
        toggleMenu();
    }, false);
}
if (menuMeetUs) {
    menuMeetUs.addEventListener('click', function () {
        toggleMenu();
        toggleHiddenText();
    }, false);
}

if (cboxLopd && btnSend) {
    cboxLopd.addEventListener('click', function () {
        toggleSendContactBtn();        
    }, false);
}

function toggleHiddenText() {    
    if (textToShow.classList.contains("op0")) {
        textToShow.classList.remove("op0");
        btn.classList.add("text-hide-shown");
    } else {
        textToShow.classList.add('op0');
        btn.classList.remove("text-hide-shown");
    }
};

function toggleMenu() {
    if (menu.classList.contains("op0-menu")) {
        menu.classList.remove("op0-menu");
        btnMenu.classList.add("arrow-up");
        menuVar.classList.add("active");
        btn.style.zIndex = 0;
        txtHidden.style.zIndex = 0;
        menuTop.style.zIndex = 0;
        menuDown.style.zIndex = 0;
        menuBuy.style.zIndex = 0;
        menuCatalog.style.zIndex = 0;
        lang.style.zIndex = 0;
    } else {
        menu.classList.add('op0-menu');
        btnMenu.classList.remove("arrow-up");
        menuVar.classList.remove("active");
        btn.style.zIndex = 1;
        txtHidden.style.zIndex = 1;
        menuTop.style.zIndex = 1;
        menuDown.style.zIndex = 1;
        menuBuy.style.zIndex = 1;
        menuCatalog.style.zIndex = 1;
        lang.style.zIndex = 1;
    }
};

function toggleSendContactBtn() {    
    if (cboxLopd.checked = false) {
        btnSend.classList.add("hidden");
    } else {
        btnSend.classList.remove("hidden");
    }
};