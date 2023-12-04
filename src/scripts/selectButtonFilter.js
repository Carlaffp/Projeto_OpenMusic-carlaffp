import { renderProducts } from './renderProducts.js';
export function hendalSelectButtonFilter(product) {
  const buttonFilter = document.querySelectorAll('.buttonType');

  buttonFilter.forEach(button => {
    button.addEventListener('click', event => {
      const element = event.target.id;

      let productsType = product.filter(e => e.category == element || element == 0);
      renderProducts(productsType);
      
      if (productsType.length == 0) {
        productNotFinded();
      }
    });
  });
}

export function productNotFinded() {
  const productSection = document.querySelector('.products__list');
  const alertProductNotFinded = document.createElement('p');
  alertProductNotFinded.classList = 'alertProductNotFinded';
  alertProductNotFinded.innerText = 'Nenhum albúm encontrado';
  productSection.append(alertProductNotFinded);

  return productSection;
}
