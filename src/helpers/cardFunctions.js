import { fetchProduct } from './fetchFunctions'; // importa a função de fetchProduct
import { createCartProductElement } from './shopFunctions'; // importa o elemento para criar o cart

const takeCard = async () => { // cria a função que será utilizada para adicionar o produto
  const cardElement = document.querySelector('.cart__products'); // recebe o elemento com a classe .cart_produts
  const buttonAdd = document.querySelectorAll('.product__add'); // cria um vetor de elementos com a classe product__add
  buttonAdd.forEach((element) => { // percorre os elementos para verificar se houve
    element.addEventListener('click', async () => { // evento para verificar se houve click
      const elementId = element.parentNode.firstChild.innerHTML; // extrai o ID para a fetchProduct
      const elementSelected = await fetchProduct(elementId); // realiza a requisição da função fetchProduct com o id passado
      const card = cardElement.appendChild(createCartProductElement(elementSelected)); // cria o card como filho do cardElement
      return card; // retorna card
    });
  });
};

export default takeCard; // exporta a função