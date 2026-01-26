import { productCards } from "./product-cards-array.js";

// Задание 3

const productTemplate = document.querySelector('#product-info')
const productList = document.querySelector('#products-list')

// productCards.forEach(product => {
//   const productCardsClone = productTemplate.content.cloneNode(true)
//   productCardsClone.querySelector('product-img').src = `Имя: ${product.img}`;
//   productCardsClone.querySelector('product-category').textContent = `Имя: ${product.category}`;
//   productCardsClone.querySelector('product-name').textContent = `Имя: ${product.name}`;
//   productCardsClone.querySelector('product-description').textContent = `Описание: ${product.description}`
//   productCardsClone.querySelector('product-compound').textContent = `Состав: ${product.compound}`
//   productCardsClone.querySelector('product-price').textContent = `Цена: ${product.price}`
//   productList.appendChild(productCardsClone)
//   console.log(productList)
// })

// Задание 4

const productInformation = productCards.reduce((accumulator, product) => {
    accumulator.push({ [product.name]: product.description });
  return accumulator;
}, []);

console.log(productInformation);


// Задание 5

function renderProductCards(productCards) {
  productCards.forEach(product => {
    const productCardsClone = productTemplate.content.cloneNode(true);

    productCardsClone.querySelector('.product-img').src = `Имя: ${product.img}`;
    productCardsClone.querySelector('.product-category').textContent = `Категория: ${product.category}`;
    productCardsClone.querySelector('.product-name').textContent = `Имя: ${product.name}`;
    productCardsClone.querySelector('.product-description').textContent = `Описание: ${product.description}`;
    productCardsClone.querySelector('.product-compound').textContent = `Состав: ${product.compound}`;
    productCardsClone.querySelector('.product-price').textContent = `Цена: ${product.price}`;

    productList.appendChild(productCardsClone);
  });
  console.log(productList);
}


const getNumberCards = () => {
   const inputPrompt = prompt("Сколько карточек отобразить? От 1 до 5")
    if (inputPrompt === null) {
            alert("Вы отменили ввод. Будет отображено 0 карточек.");
            return 0;
    }

  const countCards = parseInt(inputPrompt)
    if (!isNaN(countCards) && countCards >= 1 && countCards <= 5) {
            return countCards; 
        } else {
            alert("Некорректный ввод. Пожалуйста, введите число от 1 до 5.");
        }
      
      const numberCards = productCards.slice(0, countCards);

     renderProductCards(numberCards);
}
getNumberCards()











