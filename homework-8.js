import { productCards } from "./product-cards.js";

// Задание 3

const productTemplate = document.querySelector('#product-info')
const productList = document.querySelector('#products-list')


// Задание 4

const productInformation = productCards.reduce((accumulator, product) => {
    accumulator.push({ [product.name]: product.description });
  return accumulator;
}, []);

console.log(productInformation);


// // Задание 5

function renderProductCards(productCards) {
  productCards.forEach(product => {
    const productCardsClone = productTemplate.content.cloneNode(true);
    productCardsClone.querySelector('.product-img').src = `/images/${product.img}.png`
    productCardsClone.querySelector('.product-category').textContent = product.category
    productCardsClone.querySelector('.product-name').textContent = product.name
    productCardsClone.querySelector('.product-description').textContent = product.description
    productCardsClone.querySelector('.product-compound').innerHTML = product.compound.map(item => `<li>${item}</li>`).join("")
    productCardsClone.querySelector('.product-price-label').textContent = product.priceLabel
    productCardsClone.querySelector('.product-price').textContent = `${product.price} ₽`

    productList.appendChild(productCardsClone);
  });
  console.log(productList);
}


const initProductCards  = () => {
  const inputPrompt = prompt("Сколько карточек отобразить? От 1 до 5")
  inputPrompt === null ? alert("Вы отменили ввод. Будет отображено 0 карточек.") : 0
  
  const countCards = parseInt(inputPrompt)
  !isNaN(countCards) && countCards >= 1 && countCards <= 5 ? countCards : alert("Некорректный ввод. Пожалуйста, введите число от 1 до 5.");
      
  const numberCards = productCards.slice(0, countCards);

  renderProductCards(numberCards);
}

initProductCards ()


