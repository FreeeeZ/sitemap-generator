// Set type of input json
let jsonButton = document.querySelector('.btn__json');
let manualButton = document.querySelector('.btn__manual');
let backButton = document.querySelector('.btn__back');

let firstWrap = document.querySelector('.wrap__first-step');
let secondWrapJson = document.querySelector('.wrap__second-step.json');
let secondWrapManual = document.querySelector('.wrap__second-step.manually');

jsonButton.onclick = function () {
  firstWrap.classList.add('hidden');
  secondWrapJson.classList.remove('hidden');
};

manualButton.onclick = function () {
  firstWrap.classList.add('hidden');
  secondWrapManual.classList.remove('hidden');
};

backButton.onclick = function () {
  firstWrap.classList.remove('hidden');
  secondWrapJson.classList.add('hidden');
  secondWrapManual.classList.add('hidden');
};
