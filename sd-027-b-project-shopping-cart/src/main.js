import { searchCep } from './helpers/cepFunctions';
import './style.css';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import takeChild from './helpers/childFunctions';
import takeCard from './helpers/cardFunctions';
import recoverFunction from './helpers/recoverFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep); //
const sectionOfProduct = document.querySelector('.products'); // Obtém a sessão de classe products

const cepClick = document.querySelector('.cep-button'); // cria uma variável para ler o botão de CEP
cepClick.addEventListener('click', searchCep); // cria uma escuta de evento click para o botão de procura do CEP

window.onload = async () => { // cria a função assíncrona referente a execução da página.
  takeChild('carregando...', 'loading', true);
  try {
    const data = await fetchProductsList('computador');
    data.forEach((element) => { // varre os dados obtidos para criar cada elemento com a função createProductElement.
      let objectOfSections = { id: null, title: null, thumbnail: null, price: null }; // cria um objeto para receber os dados
      objectOfSections = element; // atribui a cada Key do objeto os dados recebidos
      const section = createProductElement(objectOfSections); // cria os elementos do objeto recebido.
      sectionOfProduct.appendChild(section); // adiciona a sessão retornada como um filho da sessão de classe produts.
    });
  } catch {
    takeChild('Algum erro ocorreu, recarregue a página e tente novamente', 'error', true); // cria o elemento de erro
  }
  takeChild('carregando...', 'loading', false); // remove o elemento de classe loading após finalizar requisição

  takeCard(); // chama a função takeCard que é responsável pelo card do fetchProduct
  recoverFunction(); // função de recuperação dos dados.
};
