/**
 * Gestione barra di ricerca
 * @type {HTMLElement}
 */
let btnSearch = document.getElementById("search-i");
btnSearch.addEventListener("click", openSearch);

let btnSearchMob = document.getElementById("search-i-mob");
btnSearchMob.addEventListener("click", openSearch);

function openSearch() {
    document.getElementsByClassName("navigation-search")[0].classList.add("nav-search-active");
    document.getElementById("search-bar").focus();

    btnSearch.classList.remove("bi-search");
    btnSearch.classList.add("bi-x-lg");
    btnSearch.removeEventListener("click", openSearch);
    btnSearch.addEventListener("click", closeSearch);
    btnSearch.parentElement.classList.add("menu-search-active");

    btnSearchMob.classList.remove("bi-search");
    btnSearchMob.classList.add("bi-x-lg");
    btnSearchMob.removeEventListener("click", openSearch);
    btnSearchMob.addEventListener("click", closeSearch);
    btnSearchMob.parentElement.classList.add("menu-search-active");
}

function closeSearch() {
    document.getElementsByClassName("navigation-search")[0].classList.remove("nav-search-active");

    btnSearch.classList.remove("bi-x-lg");
    btnSearch.classList.add("bi-search");
    btnSearch.removeEventListener("click", closeSearch);
    btnSearch.addEventListener("click", openSearch);
    btnSearch.parentElement.classList.remove("menu-search-active");

    btnSearchMob.classList.remove("bi-x-lg");
    btnSearchMob.classList.add("bi-search");
    btnSearchMob.removeEventListener("click", closeSearch);
    btnSearchMob.addEventListener("click", openSearch);
    btnSearchMob.parentElement.classList.remove("menu-search-active");
}


/**
 * Gestione primo menù
 * @type {HTMLElement}
 */
let btnMenu1 = document.getElementById("menu1-btn");
btnMenu1.addEventListener("click", openMenu1);

function openMenu1() {
    btnMenu1.children[0].classList.remove("bi-list");
    btnMenu1.children[0].classList.add("bi-x-lg");
    document.getElementById("menu-1").classList.add("mobile-active");

    btnMenu1.removeEventListener("click", openMenu1);
    btnMenu1.addEventListener("click", closeMenu1);
}

function closeMenu1() {
    btnMenu1.children[0].classList.remove("bi-x-lg");
    btnMenu1.children[0].classList.add("bi-list");
    document.getElementById("menu-1").classList.remove("mobile-active");

    btnMenu1.addEventListener("click", openMenu1);
    btnMenu1.removeEventListener("click", closeMenu1);
}


/**
 * Gestione Secondo Menu
 * @type {HTMLElement}
 */
let btnMenu2 = document.getElementById("menu2-btn");
btnMenu2.addEventListener("click", openMenu2);

function openMenu2(){
    btnMenu2.children[0].classList.remove("bi-list");
    btnMenu2.children[0].classList.add("bi-x-lg");
    document.getElementById("menu-2").classList.add("mobile-active");

    btnMenu2.removeEventListener("click", openMenu2);
    btnMenu2.addEventListener("click", closeMenu2);
}
function closeMenu2(){
    btnMenu2.children[0].classList.remove("bi-x-lg");
    btnMenu2.children[0].classList.add("bi-list");
    document.getElementById("menu-2").classList.remove("mobile-active");

    btnMenu2.addEventListener("click", openMenu2);
    btnMenu2.removeEventListener("click", closeMenu2);
}

/**
 * Gestione scroll to top
 * @type {HTMLElement}
 */
let btnToTop = document.getElementById("scroll-top");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}