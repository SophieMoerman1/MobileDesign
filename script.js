"use strict";

let menu = document.getElementById("open");
let slideOut = document.getElementById("slideOut");
let cross = document.getElementById("close");
let anchorItems = document.getElementById("anchorItems");

menu.addEventListener('click', (event) => {
    event.preventDefault();
    slideOut.className = "slideOutShow";
});

cross.addEventListener('click', (event) => {
    event.preventDefault();
    slideOut.className = "slideOutHide";
});

anchorItems.addEventListener('click', (event) => {
    event.preventDefault();
    slideOut.className = "slideOutHide";
});

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});