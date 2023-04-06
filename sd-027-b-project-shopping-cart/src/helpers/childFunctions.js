const sectionOfProduct = document.querySelector('.products'); // Obtém a sessão de classe products

function takeChild(childText, childClass, execute) {
  let element = null;
  if (execute === true) {
    const loadingVar = document.createElement('span'); // Cria um elemento span para aviso quando uma req. é feita
    loadingVar.innerText = `${childText}`; // atribui ao span o texto passado
    loadingVar.className = `${childClass}`; // atribui a classe passada como parametro para o elemento span criad
    sectionOfProduct.appendChild(loadingVar); // atribui a span criada como filha da session principal
  } else {
    element = document.querySelector(`.${childClass}`); // capta o elemento que possui a classe loading
    sectionOfProduct.removeChild(element); // remove esse elemento como filho do section de produtos.
  }
}

export default takeChild;
