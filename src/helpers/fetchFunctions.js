export const fetchProduct = async (productID) => { // recebe o ID como o parâmetro. Função assíncrona
  if (productID === undefined || productID === null || productID === '') { // verifica se o id é valido
    throw new Error('ID não informado'); // gera o erro, caso o ID não seja válido.
  }
  const URL_API = `https://api.mercadolibre.com/items/${productID}`; // cria o URL em const para consulta.
  const response = await fetch(URL_API); // faz a requisição fetch da resposta
  const data = await response.json(); // obtém os dados por uso do json() e os armazena na var. data.
  return data; // retorna os dados obtidos.
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
