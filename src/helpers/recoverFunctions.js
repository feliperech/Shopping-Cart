import { getSavedCartIDs } from './cardFunctions';
import { createCartProductElement } from './shopFunctions';
import { fetchProduct } from './fetchFunctions';

const recoverFunction = () => {
  const cardsSaved = getSavedCartIDs();
  const cardElement = document.querySelector('.cart__products');

  cardsSaved.forEach((element) => {
    const fetchElement = fetchProduct(element);
    Promise.all([fetchElement])
      .then((response) => response.forEach((responseEl) => {
        cardElement.appendChild(createCartProductElement(responseEl));
      }));
  });
};

export default recoverFunction;
