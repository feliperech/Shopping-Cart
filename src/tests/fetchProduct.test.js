import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';
// import { it } from 'mocha';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Teste se a função fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function'); 
  });

  it('Teste se, ao chamar a função com argumento "MLB1405519561", retona o endpoint correto', async () =>{
    const response = await fetchProduct('MLB1405519561');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  });
  it('Teste se, ao chamar a função com argumento MLB1405519561, retorna dados igual ao produto, importado no arquivo', async() =>{
    const response = await fetchProduct('MLB1405519561');
    expect(response).toEqual(product);
  });
  it('Teste se, ao chamar fetchProduct sem argumento, retorna o erro com "ID não informado', () => {
    expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'));
  });
});