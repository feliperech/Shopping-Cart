export const getAddress = async (CEP) => {
  const firstAdress = `https://cep.awesomeapi.com.br/json/${CEP}`; // cria o variável do primeiro endereço
  const secondAdress = `https://brasilapi.com.br/api/cep/v2/${CEP}`; // cria a variável do segundo endereço

  const response = await Promise.any([fetch(firstAdress), fetch(secondAdress)]); // faz a requisição de ambas, retornando a primeira que der certo
  const data = await response.json(); // retorna os valores obtidos como resposta da fetch para a var. data
  return data; // retorna os valores obtidos na requisição.
};

export const searchCep = async () => {
  const adress = document.querySelector('.cep-input').value; // obtém o valor do endereço digitado pelo usuário
  const card = document.querySelector('.cart__address'); // obtém o card para inserção do endereço

  try { // tenta fazer a requisição por meio da chamada de função getAdress com CEP passado
    const returnAdress = await getAddress(adress); // Cria uma variável que recebe o retorno da função getAdress
    const { address, district, city, state } = returnAdress; // desconstrói variáveis para receber o retorno
    card.innerText = `${address} - ${district} - ${city} - ${state}`; // insere os retornos/variáveis no card
  } catch (error) { // caso não consiga fazer a requisição, retorna um erro.
    card.innerText = 'CEP não encontrado'; // imprime o texto indicando que houve erro na requisição do CEP.
  }
};
