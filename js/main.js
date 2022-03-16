'use strict';

const pageBody = document.querySelector('.page-body');
const pageHeaderWrapper = document.querySelector('.page-header__wrapper');
const mainNav = document.querySelector('.main-nav');
const mainNavListPrimary = document.querySelector('.main-nav__list--primary');
const toggleButton = document.querySelector('.page-header__menu-toggle');
const cartIcon = document.querySelector('.page-header__cart');
const logoIcon = document.querySelector('.page-header__logo');
const userMenu = document.querySelector('.user-menu');
const search = document.querySelector('.page-header__search');

// mainNav.classList.remove('main-nav--nojs');

toggleButton.addEventListener('click', function () {
  if (pageHeaderWrapper.classList.contains('page-header__wrapper--toggled')) {
    pageBody.classList.remove('page-body--lock');
    pageHeaderWrapper.classList.remove('page-header__wrapper--toggled');
    pageHeaderWrapper.classList.remove('page-header__wrapper--lock');
    mainNav.classList.remove('main-nav--toggled');
    mainNav.classList.remove('main-nav__list--toggled')
    toggleButton.classList.remove('page-header__menu-toggle--toggled');
    cartIcon.classList.remove('page-header__cart--toggled');
    logoIcon.classList.remove('page-header__logo--toggled');
    userMenu.classList.remove('user-menu--toggled');
    search.classList.remove('page-header__search--toggled');
  } else {
    pageBody.classList.add('page-body--lock');
    pageHeaderWrapper.classList.add('page-header__wrapper--toggled');
    pageHeaderWrapper.classList.add('page-header__wrapper--lock');
    mainNav.classList.add('main-nav--toggled');
    mainNav.classList.add('main-nav__list--toggled')
    toggleButton.classList.add('page-header__menu-toggle--toggled');
    cartIcon.classList.add('page-header__cart--toggled');
    logoIcon.classList.add('page-header__logo--toggled');
    userMenu.classList.add('user-menu--toggled');
    search.classList.add('page-header__search--toggled');
  }
});

// for (let i = 0; i < mainNavItems.length; i++) {
//   mainNavItems[i].addEventListener('click', function () {
//     if (mainNav.classList.contains('main-nav--opened')) {
//       pageBody.classList.remove('page-body--lock');
//       mainNav.classList.remove('main-nav--opened');
//       toggleButton.classList.add('main-nav__toggle--closed');
//     }
//   });
// }

// показать меню - жс
// показать кусок юзер-меню - жс
// перекрасить пункты меню - жс
