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

function toggleHiddenText() {
    window.console.log("pasa tron");
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
    } else {
        menu.classList.add('op0-menu');
        btnMenu.classList.remove("arrow-up");
        menuVar.classList.remove("active");
        btn.style.zIndex = 1;
        txtHidden.style.zIndex = 1;
    }
};