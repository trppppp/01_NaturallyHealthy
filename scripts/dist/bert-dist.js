var textToShow=document.getElementById("text-hidden"),btn=document.getElementById("btn");btn&&btn.addEventListener("click",(function(){toggleHiddenText()}),!1);var menu=document.getElementById("menu-container"),btnMenu=document.getElementById("btn-menu"),menuVar=document.getElementById("header"),txtHidden=document.getElementById("text-hidden"),menuProductos=document.getElementById("btn-menu-p"),menuMeetUs=document.getElementById("btn-menu-m"),menuContacto=document.getElementById("btn-menu-c"),menuTop=document.getElementById("mtop"),menuDown=document.getElementById("mdown"),menuBuy=document.getElementById("mbuy"),menuCatalog=document.getElementById("mcat"),lang=document.getElementById("lang"),cboxLopd=document.getElementById("cbox"),btnSend=document.getElementById("submit");function toggleHiddenText(){textToShow.classList.contains("op0")?(textToShow.classList.remove("op0"),btn.classList.add("text-hide-shown")):(textToShow.classList.add("op0"),btn.classList.remove("text-hide-shown"))}function toggleMenu(){menu.classList.contains("op0-menu")?(menu.classList.remove("op0-menu"),btnMenu.classList.add("arrow-up"),menuVar.classList.add("active"),btn.style.zIndex=0,txtHidden.style.zIndex=0,menuTop.style.zIndex=0,menuDown.style.zIndex=0,menuBuy.style.zIndex=0,menuCatalog.style.zIndex=0,lang.style.zIndex=0):(menu.classList.add("op0-menu"),btnMenu.classList.remove("arrow-up"),menuVar.classList.remove("active"),btn.style.zIndex=1,txtHidden.style.zIndex=1,menuTop.style.zIndex=1,menuDown.style.zIndex=1,menuBuy.style.zIndex=1,menuCatalog.style.zIndex=1,lang.style.zIndex=1)}function toggleSendContactBtn(){(cboxLopd.checked=!1)?btnSend.classList.add("hidden"):btnSend.classList.remove("hidden")}btnMenu&&btnMenu.addEventListener("click",(function(){toggleMenu()}),!1),menuProductos&&menuProductos.addEventListener("click",(function(){toggleMenu()}),!1),menuContacto&&menuContacto.addEventListener("click",(function(){toggleMenu()}),!1),menuMeetUs&&menuMeetUs.addEventListener("click",(function(){toggleMenu(),toggleHiddenText()}),!1),cboxLopd&&btnSend&&cboxLopd.addEventListener("click",(function(){toggleSendContactBtn()}),!1);