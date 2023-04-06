import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const response = await fetchProductsList('computador');
    expect(fetch).toBeCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Teste se o retorno da função é como o objeto computadorSearch', async() => {
    const response = await fetchProductsList('computador');
    expect(response).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função sem argumento, retorna o erro: Termo de busca nao informado', async () => {
    const response = await fetchProductsList();
    expect(response).toThrowError('Termo de busca não informado');
  })
});
