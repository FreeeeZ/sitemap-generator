// Theme light/dark toggler
let bodySelector = document.querySelector('body');
let themeTogglerButton = document.querySelector('.header_theme-toggler');

themeTogglerButton.onclick = function () {
  bodySelector.classList.toggle('dark-theme');
  bodySelector.classList.toggle('light-theme');
};
