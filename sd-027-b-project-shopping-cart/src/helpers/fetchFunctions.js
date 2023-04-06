export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = (endpoint) => {
  const response = fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${endpoint}`);
};
