// Покраска всех карточек

const productCards = document.querySelectorAll('.card-container')
const cnangeColorAllCardButton = document.querySelector('#change-color-all-card')
const greenColorHash = '#00ff00'
const yellowColorHash = '#fffb00ff'

cnangeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})


/// Покраска первой карточки ///

const firstProductCard = document.querySelector('.card-container')
const cnangeColorFirstCardButton = document.querySelector('#change-color-first-card')

cnangeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = yellowColorHash
})

/// Открыть google ///

const openGoogleButton = document.querySelector('#open-google')

openGoogleButton.addEventListener('click', openGoogle)
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')

  if (answer === true) {
    window.open('https://google.com')
  } else {
    return
  }
}

/// Вывод в консольлог ///

const outputConsoleButton = document.querySelector('#output-console-log')

outputConsoleButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))
function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

/// Задание №6 ///

const pageTitle = document.querySelector('.page-title')

pageTitle.addEventListener('mouseover', () => {
  console.log(pageTitle.textContent)
})

/// Задание №7 ///

const changeColorButton = document.querySelector('#change-color-button')

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('color-yellow');
});





