export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (element) => { // chama a função como assíncrona de param: element
  if (element === '' || element === null || element === undefined) { // se element for inválido, então:
    throw new Error('Termo de busca não informado'); // retorna um erro, informando a mensagem passada.
  }
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?q=${element}`; // realiza a construção da API numa const.
  const response = await fetch(URL_API); // response capta o retorno await da fetch.
  const data = await response.json(); // data guarda a extração em string json do retorno da fetch.
  return data.results; // retorna o conteúdo API.results.
};
