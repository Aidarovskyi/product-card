import { productsCard } from "./product-cards-array.js";


// Задание 4
const productsInformation = productsCard.reduce((accumulator, product) => {
  accumulator.push({ [product.name]: product.description });
  return accumulator;
}, []);

console.log(productsInformation);


// Задание 5

const getNumCardsFromUser = () => {
  let count;
  while (true) {
    const inputPrompt = prompt("Сколько карточек отобразить? От 1 до 5");
    if (inputPrompt === null) {
      alert("Вы отменили ввод. Будет отображено 0 карточек.");
      return 0;
    }
    count = parseInt(inputPrompt);

    if (!isNaN(count) && count >= 1 && count <= 5) {
      return count;
    } else {
      alert("Некорректный ввод. Пожалуйста, введите число от 1 до 5.");
    }
  }
};

const renderProductCards = (productsData, numToRender) => {
  const listContainer = document.querySelector('#product-cards-list');
  const cardTemplate = document.querySelector('#product-template');

  if (!listContainer || !cardTemplate || numToRender <= 0 || !productsData || productsData.length === 0) {
    return;
  }

  listContainer.innerHTML = ''; 

  productsData.slice(0, numToRender).forEach(product => {
    const cardClone = cardTemplate.content.cloneNode(true);

   
    const categoryElement = cardClone.querySelector('.product-category');
    if (categoryElement) categoryElement.textContent = product.category || 'Без категории';

    const nameElement = cardClone.querySelector('.product-name');
    if (nameElement) nameElement.textContent = `Имя: ${product.name || 'Название не указано'}`;

    const descriptionElement = cardClone.querySelector('.product-description');
    if (descriptionElement) descriptionElement.textContent = `Описание: ${product.description || 'Нет описания'}`;

    const compoundElement = cardClone.querySelector('.product-compound');
    if (compoundElement) compoundElement.textContent = `Состав: ${product.compound || 'Состав не указан'}`;

    const priceElement = cardClone.querySelector('.product-price');
    if (priceElement) priceElement.innerHTML = `${product.price ? product.price : 'Цена не указана'} &#8381;`;

   
    listContainer.appendChild(cardClone);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const cardsCount = getNumCardsFromUser(); 
  renderProductCards(productsCard, cardsCount); 
});
