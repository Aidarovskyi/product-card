import { productCards } from "./product_cards_array.js";

// Задание 3

const productTemplate = document.querySelector('#product-template')
const productCardsList =document.querySelector('#product-cards-list')

productCards.forEach(product =>{
  const productClone = productTemplate.content.cloneNode(true)
  productClone.querySelector('.product-category').textContent = `Категория: ${product.category}`
  productClone.querySelector('.product-name').textContent = `Имя: ${product.name}`
  productClone.querySelector('.product-description').textContent = `Описание: ${product.description}`
  productClone.querySelector('.product-compound').textContent = `Состав: ${product.compound}`
  productClone.querySelector('.product-currency').textContent = `Валюта: ${product.currency}`
  productCardsList.appendChild(productClone)
})

// Задание 4

const productInformation = productCards.reduce((accumulator, product) => {
  accumulator.push({ [product.name]: product.description });
  return accumulator;
}, []);

console.log(productInformation);


// Задание 5


const showCards = () => {
   const inputPrompt = prompt("Сколько карточек отобразить? От 1 до 5")
    if (inputPrompt === null) {
            alert("Вы отменили ввод. Будет отображено 0 карточек.");
            return 0;
    }
  const count = parseInt(inputPrompt)
if (!isNaN(count) && count >= 1 && count <= 5) {
            return count; 
        } else {
            alert("Некорректный ввод. Пожалуйста, введите число от 1 до 5.");
        }}
showCards()

const renderCards = (count) => {
    const container = document.querySelector('.product-container');

    if (!container || count === 0) {
        return;
    }
  }

productTemplate = document.querySelector('#product-template')
productCardsList = document.querySelector('#product-cards-list')

productCards.forEach((product, index) =>{
  if (index >= count) return
  const productClone = productTemplate1.content.cloneNode(true)
  productClone.querySelector('.product-category').textContent = `Категория: ${product.category}`
  productClone.querySelector('.product-name').textContent = `Имя: ${product.name}`
  productClone.querySelector('.product-description').textContent = `Описание: ${product.description}`
  productClone.querySelector('.product-compound').textContent = `Состав: ${product.compound}`
  productClone.querySelector('.product-currency').textContent = `Валюта: ${product.currency}`
  productCardsList1.appendChild(productClone)
})

 numberOfCardsToDisplay = showCards();

renderCards(numberOfCardsToDisplay);







