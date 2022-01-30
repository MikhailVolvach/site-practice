"use strict";

const $header__burger = document.querySelector('.header__burger');
const $header__nav = document.querySelector('.header__nav');
const $body = document.querySelector('body');

// const $navigation = document.querySelector('.navigation');
// const $navigation__item = document.querySelector('.navigation__item');
// console.log($header__burger);

$header__burger.addEventListener('click', () => {
    $header__nav.classList.toggle('header__nav--active');
    $header__burger.classList.toggle('header__burger--active');
    $body.classList.toggle('lock');
});

// $navigation.addEventListener('click', () => {
//     $navigation__item.classList.toggle('navigation__item--active');
// });
