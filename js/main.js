`use strict`;

// ----- Меню

const pageBody = document.querySelector(`.page-body`);
const pageHeaderWrapper = document.querySelector(`.page-header__wrapper`);
const mainNav = document.querySelector(`.main-nav`);
const mainNavListPrimary = document.querySelector(`.main-nav__list--primary`);
const toggleButton = document.querySelector(`.page-header__menu-toggle`);
const cartIcon = document.querySelector(`.page-header__cart`);
const logoIcon = document.querySelector(`.page-header__logo`);
const userMenu = document.querySelector(`.user-menu`);
const search = document.querySelector(`.page-header__search`);

toggleButton.addEventListener(`click`, function () {
  if (pageHeaderWrapper.classList.contains(`page-header__wrapper--toggled`)) {
    pageBody.classList.remove(`page-body--lock`);
    pageHeaderWrapper.classList.remove(`page-header__wrapper--toggled`);
    pageHeaderWrapper.classList.remove(`page-header__wrapper--lock`);
    mainNav.classList.remove(`main-nav--toggled`);
    mainNav.classList.remove(`main-nav__list--toggled`);
    toggleButton.classList.remove(`page-header__menu-toggle--toggled`);
    cartIcon.classList.remove(`page-header__cart--toggled`);
    logoIcon.classList.remove(`page-header__logo--toggled`);
    userMenu.classList.remove(`user-menu--toggled`);
    search.classList.remove(`page-header__search--toggled`);
  } else {
    pageBody.classList.add(`page-body--lock`);
    pageHeaderWrapper.classList.add(`page-header__wrapper--toggled`);
    pageHeaderWrapper.classList.add(`page-header__wrapper--lock`);
    mainNav.classList.add(`main-nav--toggled`);
    mainNav.classList.add(`main-nav__list--toggled`);
    toggleButton.classList.add(`page-header__menu-toggle--toggled`);
    cartIcon.classList.add(`page-header__cart--toggled`);
    logoIcon.classList.add(`page-header__logo--toggled`);
    userMenu.classList.add(`user-menu--toggled`);
    search.classList.add(`page-header__search--toggled`);
  }
});

// ----- Аккордеон

const accordions = document.querySelectorAll(`.accordion`);

if (accordions) {
  const headers = document.querySelectorAll(`.accordion h3`);
  const content = document.querySelectorAll(`.accordion__content`);

  for (let i = 0; i < headers.length; i++) {
    headers[i].addEventListener(`click`, () => {
      let shown = document.querySelector(`.accordion__content--show`);

      if (shown === headers[i]) {
        content[i].classList.remove(`accordion__content--show`);
      } else {
        content[i].classList.add(`accordion__content--show`);
      }

      if (shown) {
        shown.classList.remove(`accordion__content--show`);
      }
    });
  }
}
