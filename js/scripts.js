"use strict";

const header__burger = document.querySelector('.header__burger');
const header__nav = document.querySelector('.header__nav');
const body = document.querySelector('body');

const navigation = document.querySelectorAll(".navigation");

header__burger.addEventListener('click', () => {
    header__nav.classList.toggle('header__nav--active');
    header__burger.classList.toggle('header__burger--active');
    body.classList.toggle('lock');
});
